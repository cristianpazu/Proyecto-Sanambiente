import { Component, OnInit, HostBinding } from '@angular/core';
import { Ciudad } from 'src/app/modelos/modeloCiudad/Ciudad';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro

import { CiudadesService } from '../../../servicios/serviciosCiudad/ciudades.service'; //importo el servicio
import { ChangeDetectorRef } from '@angular/core'; // Permite manejar la deteccion de cambios

@Component({
  selector: 'app-body-ciudad',
  templateUrl: './body-ciudad.component.html',
  styleUrls: ['./body-ciudad.component.css']
})
export class BodyCiudadComponent implements OnInit {

  
  ngOnInit(): void {
    this.viewRegion();
  }

 
  public formCity: FormGroup;
  public regionCity: Array<any> = [];
  public regionSelect: number;


  @HostBinding('class') classes = 'row';

  constructor(private cityService: CiudadesService, private router: Router, private activedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { 
    this.formCity = new FormGroup({
      'nombre_ciudad': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'id_region': new FormControl('', [Validators.required]),
      'observacion_ciudad': new FormControl('', [Validators.required, Validators.maxLength(250)]),
    })
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

}
