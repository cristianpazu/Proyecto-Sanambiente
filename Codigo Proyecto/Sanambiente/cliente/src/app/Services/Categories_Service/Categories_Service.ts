import { Injectable } from '@angular/core';
import { Category } from '../../Models/Categories_Model/Category';
import BaseService from '../Base_Service/Base_Service';
import { environment } from 'src/environments/environment';

 
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private baseService: BaseService) {} 

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
