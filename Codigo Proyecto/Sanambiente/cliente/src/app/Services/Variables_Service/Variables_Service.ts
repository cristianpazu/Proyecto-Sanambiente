/* Clase que contiene los servicios del lado del cliente para la tabla variable */
import { Injectable } from '@angular/core';
import { Variable } from '../../Models/Variables_Model/Variable'; // Se importa el modelo Variable para Variable
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  constructor(private baseService: BaseService) {}

  /* Se crean los metodos utilizados por la vista de Variable */
  createVariable (body: Variable) {
    return this.baseService.create(body, `${environment.hostCreateVariable}`);
  }

  viewVariables() {
    return this.baseService.view(`${environment.viewVariables}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  updateVariable(body: Variable, id_variable: number) {
    return this.baseService.update(body, `${environment.hostUpdateVariable}/${id_variable}`);
  }

  viewVariableById(id_variable: number) {
    return this.baseService.view(`${environment.hostviewVariableById}/${id_variable}`);
  }

  createTemplate(body: any) {
    return this.baseService.create(body, `${environment.hostTemplateCreate}`)
  }

}

