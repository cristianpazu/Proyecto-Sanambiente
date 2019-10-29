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
  public hide=false;

  constructor(private organizationsService: OrganizationsService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formOrganization = new FormGroup({
      'nombre_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9) ]),
      'observacion_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayOrganizations = {};

  }

  ngOnInit(): void {
    this.viewDataById()
  }

  @HostBinding('class') classes = 'row';

  async createOrganization() {
    if (this.formOrganization.valid) {
      await this.organizationsService.createOrganization(this.formOrganization.value);
      this.router.navigate(['/organization']);
    }
  }
  
  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_organizacion;
    if(id !== undefined) {
      let organization = await this.organizationsService.viewOrganizationById(id).subscribe((element: any) => {
        this.arrayOrganizations = element.message[0];
        this.edit = true;
        this.hide= true;
      });
    }
  }

  async updateOrganization() {
    let id = this.activedRoute.snapshot.params.id_organizacion;
    this.formOrganization.patchValue({
      nombre_organizacion: this.arrayOrganizations.nombre_organizacion,
      observacion_organizacion: this.arrayOrganizations.observacion_organizacion
    })
    this.organizationsService.updateOrganization(this.formOrganization.value, id)
      this.router.navigate(['/organization']);
  }
}
