import { Component, OnInit, HostBinding } from '@angular/core';
import { Region } from 'src/app/modelos/modeloRegion/Region';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro

import { RegionesService } from '../../../servicios/serviciosRegion/regiones.service'; //importo el servicio

@Component({
  selector: 'app-body-region',
  templateUrl: './body-region.component.html',
  styleUrls: ['./body-region.component.css']
})
export class BodyRegionComponent implements OnInit {

  ngOnInit(): void {

  }

  public formRegion: FormGroup;

  @HostBinding('class') classes = 'row';

  /*edit: boolean = false;*/

  constructor(private regionService: RegionesService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio

    this.formRegion = new FormGroup({
      'nombre_region': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'observacion_region': new FormControl('', [Validators.required, Validators.maxLength(250)]),
    })
  }
  async createRegion() {
    if (this.formRegion.valid) {
      await this.regionService.createRegion(this.formRegion.value);
      this.router.navigate(['/region']);
    }
  }
}




