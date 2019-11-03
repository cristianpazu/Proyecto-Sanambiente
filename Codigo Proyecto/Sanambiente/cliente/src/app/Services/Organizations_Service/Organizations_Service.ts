import { Injectable } from '@angular/core';
import { Organization  } from '../../Models/Organization_Model/Organization';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  constructor(private baseService: BaseService) {}

  createOrganization (body: Organization) {
    return this.baseService.create(body, `${environment.hostCreateOrganization}`);
  }

  viewOrganizations() {
    return this.baseService.view(`${environment.viewOrganizations}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateOrganization(body: Organization, id_organizacion: number) {
    return this.baseService.update(body, `${environment.hostUpdateOrganization}/${id_organizacion}`);
  }

  viewOrganizationById(id_organizacion: number) {
    return this.baseService.view(`${environment.hostviewOrganizationById}/${id_organizacion}`);
  }

}
