/* Clase que contiene los servicios del lado del cliente para la tabla Categoria */

import { Injectable } from '@angular/core';
import { Gmt } from '../../Models/Gmt_Model/Gmt';// Se importa el modelo Gmt para gmt
import BaseService from '../Base_Service/Base_Service';// Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class GmtService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de gmt */

  createGmt(body: Gmt) {
    return this.baseService.create(body, `${environment.hostCreateGmt}`);
  }

  viewGmt() {
    return this.baseService.view(`${environment.viewGmt}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateGmt(body: Gmt, id_gmt: number) {
    return this.baseService.update(body, `${environment.hostUpdateGmt}/${id_gmt}`);
  }

  viewGmtById(id_gmt: number) {
    return this.baseService.view(`${environment.viewGmtById}/${id_gmt}`);
  }
}
