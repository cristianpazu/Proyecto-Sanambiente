/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las Alertas*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { AlertsService } from '../../../Services/Alerts_Service/Alerts_Service';//Importo los servicios de la clase Alerts_Service


@Component({
  selector: 'app-alerts_body',
  templateUrl: './alerts_body.component.html',
  styleUrls: ['./alerts_body.component.css']
})
export class AlertsBodyComponent implements OnInit {

  public formAlert: FormGroup; // La variable formAlert permite administrar las validaciones y restricciones del formulario
  public arrayAlerts; // La variable arrayAlerts almacena el listado de las Alertas existentes. Utilizada cuando se edita una Alerta
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva Alerta o se esta editando una Alerta
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la Alerta, en la vista html

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.
 
  constructor(private alertsService: AlertsService, private router: Router, private activedRoute: ActivatedRoute) {

    this.formAlert = new FormGroup({
      'nombre_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[a-z ]*$/)]),
      'observacion_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[a-z ]*$/)]),
      'tipo_alerta': new FormControl('', [Validators.required]),
    });
    this.arrayAlerts = {
       observacion_alerta: '', //Se usa para definir el campo observacion_alerta y poder mostrar el conteo de caracteres restantes

    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Alerts_Body */
  ngOnInit(): void {
    this.viewAlertById() // Toma el id de la Alerta, cuando se vaya a editar alguna de ellas
  }

  /* Método con el cual se crea una nueva Alerta */
  async createAlert() {
    if (this.formAlert.valid) {
      await this.alertsService.createAlert(this.formAlert.value);
      alert('Alerta creada correctamente');
      this.router.navigate(['/alert']);
    }
  }

  /* Método con el cual se identifica la Alerta cuya información va a ser actualizada */
  async viewAlertById() {
    let id = this.activedRoute.snapshot.params.id_alerta;
    if (id !== undefined) {
      let alert = await this.alertsService.viewAlertById(id).subscribe((element: any) => {
        this.arrayAlerts = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la Alerta seleccionada */
  async updateAlert() {
    let id = this.activedRoute.snapshot.params.id_alerta;
    this.formAlert.patchValue({
      nombre_alert: this.arrayAlerts.nombre_alerta,
      observacion_alerta: this.arrayAlerts.observacion_alerta,
      tipo_alerta: this.arrayAlerts.tipo_alerta
    })
    this.alertsService.updateAlert(this.formAlert.value, id)
    alert('Alerta actualizada correctamente');
    this.router.navigate(['/alert']);
  }

}
