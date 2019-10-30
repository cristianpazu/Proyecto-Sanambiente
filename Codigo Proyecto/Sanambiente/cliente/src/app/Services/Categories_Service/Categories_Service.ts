/* Clase que contiene los servicios del lado del cliente para la tabla Categoria */

import { Injectable } from '@angular/core';
import { Category } from '../../Models/Categories_Model/Category';// Se importa el modelo Category para Categoria
import BaseService from '../Base_Service/Base_Service';// Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

 
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private baseService: BaseService) {} 

  /* Se crean los metodos utilizados por la vista de Categoria */

    createCategory (body: Category) {
      return this.baseService.create(body, `${environment.hostCreateCategory}`);

   }

    viewCategories() {
    return this.baseService.view(`${environment.viewCategories}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

    updateCategory(body: Category, id_categoria: number) {
    return this.baseService.update(body, `${environment.hostUpdateCategory}/${id_categoria}`);
  }

    viewCategoryById(id_categoria: number) {
    return this.baseService.view(`${environment.hostviewCategoryById}/${id_categoria}`);
  }
}
