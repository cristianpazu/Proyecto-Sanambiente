import { Injectable } from '@angular/core';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectFtpStationService {

  constructor(private baseService: BaseService) { }

  createConnectionFTP(body) {
    return this.baseService.create(body, `${environment.hostFTPCreate}`)
  }

  viewDataFTP() {
    return this.baseService.view(`${environment.hostFTPviewDATA}`).toPromise().then((data: any)=>data.message).catch((error)=>console.log(error));
  }

}
