/* Clase que contiene los servicios del lado del cliente para la tabla rango */

import { Injectable } from '@angular/core';
import { Rank } from '../../Models/Ranks_Model/Rank'; // Se importa el modelo City para rango
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class RanksService{

  constructor(private baseService: BaseService) { }

/* Se crean los metodos utilizados por la vista de rango */

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
