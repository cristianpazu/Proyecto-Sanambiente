/* Clase que contiene los servicios del lado del cliente para la tabla ciudad */

import { Injectable } from '@angular/core'; 
import { City } from '../../Models/Cities_Model/City'; // Se importa el modelo City para ciudad
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private baseService: BaseService) {}
  
/* Se crean los metodos utilizados por la vista de ciudad */

  createCity (body: City) {
    return this.baseService.create(body, `${environment.hostCreateCity}`);
  }

  viewRegion() {
    return this.baseService.view(`${environment.viewRegion}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewCities() {
    return this.baseService.view(`${environment.viewCities}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewCityById(id_ciudad: number) {
    return this.baseService.view(`${environment.viewCityById}/${id_ciudad}`);
  }

  updateCity(body: City, id_ciudad: number) {
    return this.baseService.update(body, `${environment.hostUpdateCity}/${id_ciudad}`);
  }

}