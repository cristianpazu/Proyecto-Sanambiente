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
    return this.baseService.create(body, `${environment.hostCreateRank}`);
    
  }

  viewStationsRank() {
    return this.baseService.view(`${environment.viewStationsRank}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRanks() {
    return this.baseService.view(`${environment.viewRanks}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRankById(id_rango: number) {
    return this.baseService.view(`${environment.viewRankById}/${id_rango}`);
  }

  updateRank(body: Rank, id_rango: number) {
    return this.baseService.update(body, `${environment.hostUpdateRank}/${id_rango}`);
  }

}
