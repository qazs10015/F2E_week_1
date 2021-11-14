import { ActivityModel } from './../models/activity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private api = environment.apiURL + 'Activity/';

  constructor(private http: HttpClient) { }
  getActivity() {
    return this.http.get<ActivityModel[]>(this.api);
  }
  getActivityByCity(city: string, top?: number) {
    let params: any = {
      $format: 'JSON',
      $filter: `contains(City,'${city}')`
    }
    if (top) {
      params['$top'] = top
    }
    return this.http.get<ActivityModel[]>(this.api, { params: params });
  }


  getActivityByKeyword(city: string, keyword: string, top?: number) {
    let params: any = {
      $format: 'JSON',
      $filter: `contains(Name,'${keyword}')`
    }
    if (top) {
      params['$top'] = top
    }
    return this.http.get<ActivityModel[]>(this.api + city, { params: params });
  }
}
