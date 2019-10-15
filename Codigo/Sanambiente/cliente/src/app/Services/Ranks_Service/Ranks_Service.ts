import { Injectable } from '@angular/core';
import { Rank } from '../../Models/Ranks_Model/Rank';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RanksService{

  constructor(private baseService: BaseService) { }

  createRank (body: Rank) {
    return this.baseService.create(body, `${environment.hostCreateCity}`);
    
  }

  viewStation() {
    return this.baseService.view(`${environment.viewRegion}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRanks() {
    return this.baseService.view(`${environment.viewCities}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }


}
