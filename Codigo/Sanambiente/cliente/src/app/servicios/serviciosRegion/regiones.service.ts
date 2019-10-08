import { Injectable } from '@angular/core';
import { Region } from '../../modelos/modeloRegion/Region'; // importo la interfaz que cree en region.ts
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

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
}
