import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestaurantModel } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private api = environment.apiURL + 'Restaurant/';

  constructor(private http: HttpClient) { }

  getRestaurant() {
    return this.http.get<RestaurantModel[]>(this.api);
  }
  getRestaurantByCity(city: string, top?: number) {
    let params: any = {
      $format: 'JSON',
      $filter: `contains(City,'${city}')`
    }
    if (top) {
      params['$top'] = top
    }
    return this.http.get<RestaurantModel[]>(this.api, { params: params });
  }


  getRestaurantByKeyword(city: string, keyword: string, top?: number) {
    let params: any = {
      $format: 'JSON',
      $filter: `contains(Name,'${keyword}')`
    }
    if (top) {
      params['$top'] = top
    }
    return this.http.get<RestaurantModel[]>(this.api + city, { params: params });
  }
}
