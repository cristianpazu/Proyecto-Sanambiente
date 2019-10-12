import { Injectable } from '@angular/core';
import { Region } from '../../Models/Regions_Model/Region';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private baseService: BaseService) {}

  createRegion (body: Region) {
    return this.baseService.create(body, `${environment.hostCreateRegion}`);
    
  }

  /*viewRegion() {
    return this.baseService.view(`${environment.viewRegion}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }*/

  viewRegions() {
    return this.baseService.view(`${environment.viewRegions}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateRegion(){
  }
}
