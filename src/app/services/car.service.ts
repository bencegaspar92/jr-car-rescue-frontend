import { Injectable } from '@angular/core';
import {CarModel} from '../models/car.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {
  }

  getCars(): any {
    return this.http.get<any>('/assets/demo/cars.json')
      .toPromise()
      .then(res => res.data as CarModel[])
      .then(data => data);
  }
}
