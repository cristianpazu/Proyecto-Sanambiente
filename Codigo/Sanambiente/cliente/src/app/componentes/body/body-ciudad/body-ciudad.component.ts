import { Component, OnInit, HostBinding } from '@angular/core';
import { Ciudad } from 'src/app/modelos/modeloCiudad/Ciudad';

import { CiudadesService } from '../../../servicios/serviciosCiudad/ciudades.service'; //importo el servicio
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro

@Component({
  selector: 'app-body-ciudad',
  templateUrl: './body-ciudad.component.html',
  styleUrls: ['./body-ciudad.component.css']
})
export class BodyCiudadComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // creo un objeto HostBinding que se llenara con los datos

  // del juego, para enviarlos al servidor y guardar los datos.

  ciudad: Ciudad = {
    id_ciudad: 0,
    nombre_ciudad: '',
    nombre_region: '',
    observacion_ciudad: ''
  };

  edit: boolean = false;

  forma: FormGroup;

  constructor(private ciudadesServicio: CiudadesService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio

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
    const params = this.activedRoute.snapshot.params;
    if (params.id_ciudad) {
      this.ciudadesServicio.obtenerCiudad(params.id_ciudad).subscribe(
        async (res: any) => {
          this.ciudad = await res.ciudad[0];
          console.log(this.ciudad);
          this.edit=true;
        },
        err => console.error(err)
      );
    }
  }

    /* funcion que recupera el listado de regiones cada vez que hago una peticion http cuando inicia la aplicacion
    de regiones, voy a listar las regiones que existan. Usando el metodo obtenerRegiones y los almaceno dentro de
    una arreglo */


    crearNuevaCiudad() {
      delete this.ciudad.id_ciudad; // elimino el id que me trae el arreglo region, ya en mi base de datos el campo id_region es autoincremental
      this.ciudadesServicio.guardarCiudad(this.ciudad)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/ciudad']);
          },
          err => console.error(err)
        )
    }

    actualizarCiudad() {
      this.ciudadesServicio.actualizarCiudad(this.ciudad.id_ciudad,this.ciudad)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/ciudad']);
        },
        err=>console.error(err)
      )
    }
  }
