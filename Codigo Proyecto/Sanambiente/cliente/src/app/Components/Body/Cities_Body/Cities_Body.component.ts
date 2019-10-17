import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { CitiesService } from '../../../Services/Cities_Service/Cities_Service'; //importo el servicio
import { ChangeDetectorRef } from '@angular/core'; // Permite manejar la deteccion de cambios
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-Cities_Body',
  templateUrl: './Cities_Body.component.html',
  styleUrls: ['./Cities_Body.component.css']
})
export class CitiesBodyComponent implements OnInit {

  
  ngOnInit(): void {
    this.viewRegion();
    this.viewDataById();
  }

 
  public formCity: FormGroup;
  public regionCity: Array<any> = [];
  public regionSelect: number;
  public arrayCities: any; 
  public edit = false;
  public hide=false;

  @HostBinding('class') classes = 'row';

  constructor(private cityService: CitiesService, private router: Router, private activedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { 
    this.formCity = new FormGroup({
      'nombre_ciudad': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      'id_region': new FormControl('', [Validators.required]),
      'observacion_ciudad': new FormControl('', [Validators.required, Validators.maxLength(50)]),
    })
    this.arrayCities = {};
  }

  async createCity() {
    if(this.formCity.valid) {
      await this.cityService.createCity(this.formCity.value);
      this.router.navigate(['/city']);
    }
  }

  async viewRegion() {
    this.regionCity = (await this.cityService.viewRegion());
  }

  snapshotRegion() {
    console.log(this.regionSelect);
  }

  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_ciudad;
    if(id !== undefined) {
      let region = await this.cityService.viewRegionById(id).subscribe(async (element: any) => {
        this.arrayCities = await element.message[0];
        this.edit = true;
        this.hide=true;
      });
    }
  }

  async updateCity() {
    let id = this.activedRoute.snapshot.params.id_ciudad;
    this.formCity.patchValue({
      nombre_ciudad: this.arrayCities.nombre_ciudad,
      observacion_ciudad: this.arrayCities.observacion_ciudad,
    })
    this.cityService.updateCity(this.formCity.value, id)
    this.router.navigate(['/city']);
  }
}
