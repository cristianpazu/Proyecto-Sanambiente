/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las estaciones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { StationsService } from '../../../Services/Stations_Service/Stations_Service'; //Importo los servicios de la clase Stations_Service

@Component({
  selector: 'app-Stations_Body',
  templateUrl: './Stations_Body.component.html',
  styleUrls: ['./Stations_Body.component.css']
})
export class StationsBodyComponent implements OnInit {

  public formStation: FormGroup; // La variable formStation permite administrar las validaciones y restricciones del formulario
  public regionStation: Array<any> = []; // La variable regionStation almacena el listado de las regiones existentes
  public cityStation: Array<any> = []; // La variable cityStation almacena el listado de las ciudades existentes en la region seleccionada
  public categoryStation: Array<any> = []; // La variable categoryStation almacena el listado de las categorias existentes
  public timeStation: Array<any> = []; // La variable timeStation almacena el listado de los tiempos existentes
  public arrayStations: any; // La variable arrayStations almacena el listado de las estaciones existentes. Utilizada cuando se edita una estacion
  public edit = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva estacion o se esta editando una estacion
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la estacion, en la vista html

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private stationService: StationsService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formStation = new FormGroup({
      'nombre_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'serial_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'nombre_corto_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'id_categoria': new FormControl('', [Validators.required]),
      'id_tiempo': new FormControl('', [Validators.required]),
      'id_region': new FormControl('', [Validators.required]),
      'id_ciudad': new FormControl('', [Validators.required]),
      'latitud_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^\d+(\.\d{1,40})?$/)]), // --> decimales y enteros ** ^\d+\.\d{0,2}$ --> solo decimales  
      'longitud_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^\d+(\.\d{1,40})?$/)]),
      'elevacion_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^\d+(\.\d{1,40})?$/)]),
      'gmt_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'protocolo_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_estacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    })
    this.arrayStations = {
      observacion_estacion:''
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Stations_Body */
  ngOnInit(): void {
    this.viewDataById(); // Toma el id de la estacion, cuando se vaya a editar alguna de ellas
    this.viewRegionS(); // Carga las regiones existentes
    this.viewCityS(); // Carga las ciudades existentes en la region seleccionada
    this.viewCategory(); // Carga las categorias existentes
    this.viewTime(); // Carga los tiempos existentes
  }

  /* Método con el cual se crea una nueva estacion */
  async createStation() {
    if (this.formStation.valid) {
      await this.stationService.createStation(this.formStation.value);
      alert('Estación creada correctamente');
      this.router.navigate(['/station']);
    }
  }

  /* Método con el cual se listan las categorias existentes */
  async viewCategory() {
    this.categoryStation = (await this.stationService.viewCategory());
  }

  /* Método con el cual se listan los tiempos existentes */
  async viewTime() {
    this.timeStation = (await this.stationService.viewTime());
  }

  /* Método con el cual se listan las regiones existentes */
  async viewRegionS() {
    this.regionStation = (await this.stationService.viewRegionS());
;  }



  /* Método con el cual se listan las ciudades existentes en la region seleccionada*/
  async viewCityS() {
    this.cityStation = (await this.stationService.viewCityS());
  }


  /* Método con el cual se identifica la estacion cuya información va a ser actualizada */
  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_estacion;
    if (id !== undefined) {
      let station = await this.stationService.viewStationById(id).subscribe(async (element: any) => {
        this.arrayStations = await element.message[0];
        console.log(this.arrayStations);
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la estacion seleccionada */
  async updateStation() {
    let id = this.activedRoute.snapshot.params.id_estacion;
    this.formStation.patchValue({
      nombre_estacion: this.arrayStations.nombre_estacion,
      serial_estacion: this.arrayStations.serial_estacion,
      nombre_corto_estacion: this.arrayStations.nombre_corto_estacion,
      latitud_estacion: this.arrayStations.latitud_estacion,
      longitud_estacion: this.arrayStations.longitud_estacion,
      elevacion_estacion: this.arrayStations.elevacion_estacion,
      gmt_estacion: this.arrayStations.gmt_estacion,
      protocolo_estacion: this.arrayStations.protocolo_estacion,
      observacion_estacion: this.arrayStations.observacion_estacion,
    })
    this.stationService.updateStation(this.formStation.value, id)
    alert('Estación actualizada correctamente');
    this.router.navigate(['/station']);
  }
}
