import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailInfoComponent } from 'src/app/components/dialogs/detail-info/detail-info.component';
import { ScenicSpotModel } from 'src/app/models/scenic-spot.model';
import { GlobalService } from 'src/app/services/global.service';
import { ScenicSpotService } from 'src/app/services/scenic-spot.service';

@Component({
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  keyword = '';

  city = '';

  lstData: ScenicSpotModel[] = [];

  currentPage = 1;

  constructor(private scenicSpotService: ScenicSpotService, private route: ActivatedRoute, private globalService: GlobalService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(val => {

      const keyword = val['keyword'] ?? '';
      const city = val['city'] ?? '';
      this.scenicSpotService.getScenicSpotByKeyword(city, keyword).pipe(delay(1000)).subscribe(val => {
        this.lstData = val;
      })
    });

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

}
