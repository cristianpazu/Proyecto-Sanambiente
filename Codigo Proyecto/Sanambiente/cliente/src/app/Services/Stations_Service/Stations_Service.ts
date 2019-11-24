/* Clase que contiene los servicios del lado del cliente para la tabla estacion */

import { Injectable } from '@angular/core';
import { Station } from '../../Models/Stations_Model/Station'; // Se importa el modelo Station para estacion
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de estaciones */

  createStation(body: Station) {
    return this.baseService.create(body, `${environment.hostCreateStation}`);
  }

  viewStationById(id_estacion: number) {
    return this.baseService.view(`${environment.viewStationById}/${id_estacion}`);
  }

  viewCategoryStation() {
    return this.baseService.view(`${environment.viewCategoryStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewTimeStation() {
    return this.baseService.view(`${environment.viewTimeStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRegionStation() {
    return this.baseService.view(`${environment.viewRegionStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  
  viewGmtStation() {
    return this.baseService.view(`${environment.viewGmtStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewCityStation() {
    return this.baseService.view(`${environment.viewCityStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewStations() {
    return this.baseService.view(`${environment.viewStations}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateStation(body: Station, id_estacion: number) {
    return this.baseService.update(body, `${environment.hostUpdateStation}/${id_estacion}`);
  }

}
