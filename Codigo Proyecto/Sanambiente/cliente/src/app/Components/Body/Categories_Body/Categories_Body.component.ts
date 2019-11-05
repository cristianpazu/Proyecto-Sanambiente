import { Component, OnInit, HostBinding } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro

import { CategoriesService } from '../../../Services/Categories_Service/Categories_Service';


@Component({
  selector: 'app-Categories_body',
  templateUrl: './Categories_body.component.html',
  styleUrls: ['./Categories_body.component.css']
})
export class CategoriesBodyComponent implements OnInit {

  public formCategory: FormGroup;
  public edit: boolean = false;
  public arrayCategories;
  public lengthCategories: number;
  public hide=false;

  constructor(private categoriesService: CategoriesService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio
    this.formCategory = new FormGroup({
      'nombre_categoria': new FormControl('', [Validators.required, Validators.maxLength(49.9) ]),
      'observacion_categoria': new FormControl('', [Validators.required, Validators.maxLength(249.9)]),
    }); 
    this.arrayCategories = {

      nombre_categoria: '',
      observacion_categoria: ''
    };
}
  ngOnInit(): void {
    this.viewDataById()
  }

  @HostBinding('class') classes = 'row';

  async createCategory() {
    if (this.formCategory.valid) {
      await this.categoriesService.createCategory(this.formCategory.value);
      alert('Categoría creada correctamente');
      this.router.navigate(['/category']);
    }
  }
  
  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_categoria;
    if(id !== undefined) {
      let category = await this.categoriesService.viewCategoryById(id).subscribe((element: any) => {
        this.arrayCategories = element.message[0];
        this.edit = true;
        this.hide= true;
      });
    }
  }

  async updateCategory() {
    let id = this.activedRoute.snapshot.params.id_categoria;
    this.formCategory.patchValue({
      nombre_categoria: this.arrayCategories.nombre_categoria,
      observacion_categoria: this.arrayCategories.observacion_categoria
    })
    this.categoriesService.updateCategory(this.formCategory.value, id)
      alert('Categoría actualizada correctamente');
      this.router.navigate(['/category']);
  }
  
 

}
