/* Clase que contiene los servicios del lado del cliente para la tabla periodicidad */

import { Injectable } from '@angular/core';
import { Periodicity } from '../../Models/Periodicities_Model/Periodicity'; // Se importa el modelo Periodicity para periodicidad
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class PeriodicitiesService {

  constructor(private baseService: BaseService) { }
  /* Se crean los metodos utilizados por la vista de periodicidad */
  createPeriodicity(body: Periodicity) {
    return this.baseService.create(body, `${environment.hostCreatePeriodicity}`);

  }

  viewPeriodicities() {
    return this.baseService.view(`${environment.viewPeriodicities}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updatePeriodicity(body: Periodicity, id_periodicidad: number) {
    return this.baseService.update(body, `${environment.hostUpdatePeriodicity}/${id_periodicidad}`);
  }

  viewPeriodicityById(id_periodicidad: number) {
    return this.baseService.view(`${environment.viewPeriodicityById}/${id_periodicidad}`);
  }

}
