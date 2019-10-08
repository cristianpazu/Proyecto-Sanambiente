import { Injectable } from '@angular/core';
import { Ciudad } from '../../modelos/modeloCiudad/Ciudad';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private baseService: BaseService) {}
  

  createCity (body: Ciudad) {
    return this.baseService.create(body, `${environment.hostCreateCity}`);
    
  }

  viewRegion() {
    return this.baseService.view(`${environment.viewRegion}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewCities() {
    return this.baseService.view(`${environment.viewCities}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

}