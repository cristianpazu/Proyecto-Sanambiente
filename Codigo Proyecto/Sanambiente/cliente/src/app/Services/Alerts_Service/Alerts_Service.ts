/* Clase que contiene los servicios del lado del cliente para la tabla Alerta */

import { Injectable } from '@angular/core';
import { Alert } from '../../Models/Alerts_Model/Alerts';// Se importa el modelo Alert para Alerta
import BaseService from '../Base_Service/Base_Service';// Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

 
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private baseService: BaseService) {} 

  /* Se crean los metodos utilizados por la vista de Alerta */

    createAlert (body: Alert) {
      return this.baseService.create(body, `${environment.hostCreateAlert}`);

   }

    viewAlerts() {
    return this.baseService.view(`${environment.viewAlerts}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  
  viewAlertById(id_alerta: number) {
    return this.baseService.view(`${environment.hostviewAlertById}/${id_alerta}`);
  }
  
  updateAlert(body: Alert, id_alerta: number) {
  return this.baseService.update(body, `${environment.hostUpdateAlert}/${id_alerta}`);
  }

}