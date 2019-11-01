/* Clase que contiene los servicios del lado del cliente para la tabla base de tiempo */

import { Injectable } from '@angular/core';
import { Time } from '../../Models/Times_Model/Times'; // Se importa el modelo City para base de tiempo
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private baseService: BaseService) {}

  /* Se crean los metodos utilizados por la vista de base de tiempo */
  createTime (body: Time) {
    return this.baseService.create(body, `${environment.hostCreateTime}`);
    
  }

  viewTimes() {
    return this.baseService.view(`${environment.viewTimes}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateTime(body: Time, id_tiempo: number) {
    return this.baseService.update(body, `${environment.hostUpdateTime}/${id_tiempo}`);
  }

  viewTimeById(id_tiempo: number) {
    return this.baseService.view(`${environment.hostviewTimeById}/${id_tiempo}`);
  }

}