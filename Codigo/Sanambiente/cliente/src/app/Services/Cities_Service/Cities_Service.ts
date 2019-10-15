import { Injectable } from '@angular/core';
import { City } from '../../Models/Cities_Model/City';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private baseService: BaseService) {}
  

  createCity (body: City) {
    return this.baseService.create(body, `${environment.hostCreateCity}`);
    
  }

  viewRegion() {
    return this.baseService.view(`${environment.viewRegion}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewCities() {
    return this.baseService.view(`${environment.viewCities}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRegionById(id_ciudad: number) {
    return this.baseService.view(`${environment.viewCityById}/${id_ciudad}`);
  }

  updateCity(body: City, id_ciudad: number) {
    return this.baseService.update(body, `${environment.hostUpdateCity}/${id_ciudad}`);
  }

}