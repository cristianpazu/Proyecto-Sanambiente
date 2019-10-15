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

  viewRegions() {
    return this.baseService.view(`${environment.viewRegions}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateRegion(body: Region, id_region: number) {
    return this.baseService.update(body, `${environment.hostUpdateRegion}/${id_region}`);
  }

  viewRegionById(id_region: number) {
    return this.baseService.view(`${environment.hostviewRegionById}/${id_region}`);
  }

}
