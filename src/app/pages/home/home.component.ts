import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { categoryList } from 'src/app/components/filter-block/condition.config';
import SwiperCore, { Autoplay, Grid, Pagination, Zoom } from "swiper";
import { DetailInfoComponent } from './../../components/dialogs/detail-info/detail-info.component';
import { ActivityService } from './../../services/activity.service';
import { GlobalService } from './../../services/global.service';
import { RestaurantService } from './../../services/restaurant.service';
import { ScenicSpotService } from './../../services/scenic-spot.service';


// install Swiper modules
SwiperCore.use([Grid, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private categoryList = categoryList;
  lstTravel: any = [];
  lstFood: any = [];
  lstActivity: any = [];

  constructor(
    private globalService: GlobalService,
    private scenicSpotService: ScenicSpotService,
    private restaurantService: RestaurantService,
    private activityService: ActivityService) {
  }

  ngOnInit() {

    // 合併所有城市資料
    const lstCity = categoryList.map(city => city.citys.map(item => item.en)).reduce((accumulator, value) => accumulator.concat(value), []);
    // 隨機一個英文城市名
    const currentCity = lstCity[this.GetRandomNum(0, lstCity.length - 1)];

    // 取出中文名稱當作預設搜尋美食的關鍵字
    const city_zhtw = categoryList.map(item => item.citys.find(city => city.en === currentCity)?.zhtw).sort()[0] ?? '';

    const obs = forkJoin([
      this.getTravelInfo(currentCity),
      this.getFoodInfo(city_zhtw),
      this.getEventInfo(city_zhtw)]);
    obs.subscribe((val: any[]) => {
      this.lstTravel = val[0];
      this.lstFood = val[1];
      this.lstActivity = val[2];
    });
  }

  /** 取得一個城市的景點資料 */
  getTravelInfo(city_en: string) {
    return this.scenicSpotService.getScenicSpotByCity(city_en).pipe(
      map(val => {
        const havePicture = val.filter(item => Object.keys(item.Picture).length > 0 && item.Picture.PictureUrl1 !== undefined);
        // 有圖片的景點超過十張就取10張
        return havePicture.length > 10 ? havePicture.slice(0, 10) : havePicture;
      }),
    );

  }


  /** 取得一個城市的美食資料 */
  getFoodInfo(city_zhtw: string) {
    return this.restaurantService.getRestaurantByCity(city_zhtw, 4);
  }

  /** 取得一個城市的活動資料 */
  getEventInfo(city_zhtw: string) {
    return this.activityService.getActivityByCity(city_zhtw);
  }

  openDetail(detail: any) {
    // 整理照片資訊為指定物件格式 {Picture:string, Description:string}
    const lstPictureInfo = [];
    if (detail && Object.keys(detail.Picture).length > 0) {
      const pictureInfo = Object.values(detail.Picture);
      for (let i = 0; i < pictureInfo.length; i += 2) {
        lstPictureInfo.push({ Picture: pictureInfo[0], Description: pictureInfo[1] });
      }
    }

    // 調整資料格式
    const data = {
      ...detail,
      Description: detail?.Description ?? detail?.DescriptionDetail,
      Picture: lstPictureInfo,
      OpenTime: detail?.OpenTime ?? `${detail?.StartTime} ~ ${detail?.EndTime}`
    }


    const ref = this.globalService.openDialog(DetailInfoComponent, data).afterClosed();
  }

  private GetRandomNum(min = 0, max: number) {
    const range = max - min;

    const rand = Math.random();

    return (min + Math.round(rand * range));

  }

}
