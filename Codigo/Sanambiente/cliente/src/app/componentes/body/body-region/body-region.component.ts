import { Component, OnInit, HostBinding } from '@angular/core';
import { Region } from 'src/app/modelos/modeloRegion/Region';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegionesService } from '../../../servicios/serviciosRegion/regiones.service'; //importo el servicio
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-body-region',
  templateUrl: './body-region.component.html',
  styleUrls: ['./body-region.component.css']
})
export class BodyRegionComponent implements OnInit {
  //  @HostBinding('class') classes = 'row'; // creo un objeto HostBinding que se llenara con los datos
  // del juego, para enviarlos al servidor y guardar los datos.
  
  searchText;

  region: Region = {
    id_region: 0,
    nombre_region: '',
    observacion_region: ''
  };

  edit: boolean = false;

  listaregiones: any = []; // propiedad de tipo arreglo que me almacenara las regiones encontrados

  forma: FormGroup;

  constructor(private regionesServicio: RegionesService, private router: Router, private activatedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio

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
    this.obtenerRegiones(); // refresca la lista de las regiones cada vez que creo una region nueva
  }

  obtenerRegiones() { // funcion que recupera el listado de regiones cada vez que hago una peticion http
    // cuando inicia la aplicacion de regiones, voy a listar las regiones que existan. Usando el
    // metodo obtenerRegiones y los almaceno dentro de una arreglo
    this.regionesServicio.obtenerRegiones().subscribe( // este metodo es un observable, por ende me puede devolver 2 cosas:
      // una respuesta satisfactoria o un error.
      // ahora voy a manejar ambas posibles respuestas mediante una funcion
      async (res: any) => {
        this.listaregiones = await res.regiones;
        console.log(this.listaregiones)
      }, // estas dos funciones las ejecuta el metodo suscribe
      err => console.error(err)
    );
  }
  limpiarCampos(){
    this.region={};
  }
  crearNuevaRegion() {
    delete this.region.id_region; // elimino el id que me trae el arreglo region, ya en mi base de datos el campo id_region es autoincremental

    this.regionesServicio.guardarRegion(this.region).subscribe(
      res => {
        console.log(res);
        this.obtenerRegiones();
        this.limpiarCampos(); // ejecuta la funcion obtenerRegiones y actualiza la vista
        //this.router.navigate(['/region']);
      },
      err => console.error(err)
    )
  }
}
