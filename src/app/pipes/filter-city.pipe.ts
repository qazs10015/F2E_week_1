import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(citysList: { zhtw: string, en: string }[], searchKey: string): { zhtw: string, en: string }[] {

    // 相似的字就可以搜尋
    // 支援中英文搜尋
    // '臺' 會替換成 '台'
    const filterResult = citysList.filter(item => item.zhtw.replace('臺', '台').includes(searchKey) || item.en.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
    return filterResult.length === 0 && searchKey === '' ? citysList : filterResult;
  }

}
