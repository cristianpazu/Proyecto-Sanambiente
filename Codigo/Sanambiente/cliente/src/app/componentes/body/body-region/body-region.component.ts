import { Component, OnInit, HostBinding } from '@angular/core';
import { Region } from 'src/app/modelos/modeloRegion/Region';

import { RegionesService } from '../../../servicios/serviciosRegion/regiones.service'; //importo el servicio
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro

@Component({
  selector: 'app-body-region',
  templateUrl: './body-region.component.html',
  styleUrls: ['./body-region.component.css']
})
export class BodyRegionComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // creo un objeto HostBinding que se llenara con los datos

  // del juego, para enviarlos al servidor y guardar los datos.

  region: Region = {
    id_region: 0,
    nombre_region: '',
    observacion_region: ''
  };

  edit: boolean = false;

  forma: FormGroup;

  constructor(private regionesServicio: RegionesService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'observacion': new FormControl('', [Validators.required, Validators.maxLength(250)])
    })
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }

  ngOnInit() {
    /*const params = this.activedRoute.snapshot.params; // contiene el parametro que me envian. Ej: el id de la region que quiero editar
    if (params.id_region) {
      this.regionesServicio.obtenerRegion(params.id_region)
        .subscribe(
          res => {
            console.log(this.region);
            this.region = res;
          },
          err => console.error(err)
        )
    }*/
    const params = this.activedRoute.snapshot.params;
    if (params.id_region) {
      this.regionesServicio.obtenerRegion(params.id_region).subscribe(
        async (res: any) => {
          this.region = await res.region[0];
          console.log(this.region);
          this.edit=true;
        },
        err => console.error(err)
      );
    }
  }

    /* funcion que recupera el listado de regiones cada vez que hago una peticion http cuando inicia la aplicacion
    de regiones, voy a listar las regiones que existan. Usando el metodo obtenerRegiones y los almaceno dentro de
    una arreglo */


    crearNuevaRegion() {
      delete this.region.id_region; // elimino el id que me trae el arreglo region, ya en mi base de datos el campo id_region es autoincremental
      this.regionesServicio.guardarRegion(this.region)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/region']);
          },
          err => console.error(err)
        )
    }

    actualizarRegion() {

      this.regionesServicio.actualizarRegion(this.region.id_region,this.region)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/region']);
        },
        err=>console.error(err)
      )
    }
  }
