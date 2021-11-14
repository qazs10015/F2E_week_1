import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { ScenicSpotModel } from '../models/scenic-spot.model';
import { delay, delayWhen, map, retryWhen, switchMap, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScenicSpotService {

  private api = environment.apiURL + 'ScenicSpot/';

  constructor(private http: HttpClient) { }

  getScenicSpot() {
    return this.http.get<ScenicSpotModel[]>(this.api);
  }
  getScenicSpotByCity(city: string, top?: number) {
    let params: any = {
      $format: 'JSON'
    }
    if (top) {
      params['$top'] = top
    }
    return this.http.get<ScenicSpotModel[]>(this.api + city, { params: params });
  }

  getScenicSpotByKeyword(city: string, keyword: string, top?: number) {
    let params: any = {
      $format: 'JSON',
      $filter: `contains(Name,'${keyword}')`
    }
    if (top) {
      params['$top'] = top
    }
    return this.http.get<ScenicSpotModel[]>(this.api + city, { params: params });
  }

}
