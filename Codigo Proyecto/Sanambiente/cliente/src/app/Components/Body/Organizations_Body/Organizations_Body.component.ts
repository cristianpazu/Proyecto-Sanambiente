/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las organizaciones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrganizationsService } from '../../../Services/Organizations_Service/Organizations_Service';

@Component({
  selector: 'app-Organizations_Body',
  templateUrl: './Organizations_Body.component.html'
})
export class OrganizationsBodyComponent implements OnInit {

  public formOrganization: FormGroup;
  public edit: boolean = false;
  public arrayOrganizations;
  public lengthOrganizations: number;
  public hide = false;

  constructor(private organizationService: OrganizationsService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formOrganization = new FormGroup({
      'nombre_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'email_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'telefono_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[0-9]\d{6,9}$/)]),
      'observacion_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayOrganizations = {

      nombre_organizacion: '',
      email_organizacion: '',
      telefono_organizacion: '',
      observacion_organizacion: ''
      
    };

  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Organizations_Body */
  ngOnInit(): void {
    this.viewDataById() // Toma el id de la organizacion, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row';  // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.


  /* Método con el cual se crea una nueva organizacion */
  async createOrganization() {
    if (this.formOrganization.valid) {
      await this.organizationService.createOrganization(this.formOrganization.value);
      alert('Organización creada correctamente');
      this.router.navigate(['/organization']);
    }
  }

  /* Método con el cual se identifica la organizacion cuya información va a ser actualizada */
  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_organizacion;
    if (id !== undefined) {
      let organization = await this.organizationService.viewOrganizationById(id).subscribe((element: any) => {
        this.arrayOrganizations = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la organizacion seleccionada */
  async updateOrganization() {
    let id = this.activedRoute.snapshot.params.id_organizacion;
    this.formOrganization.patchValue({
      nombre_organizacion: this.arrayOrganizations.nombre_organizacion,
      observacion_organizacion: this.arrayOrganizations.observacion_organizacion,
      email_organizacion: this.arrayOrganizations.email_organizacion,
      telefono_organizacion: this.arrayOrganizations.telefono_organizacion
    })
    this.organizationService.updateOrganization(this.formOrganization.value, id)
    alert('Organización actualizada correctamente');
    this.router.navigate(['/organization']);
  }
}
