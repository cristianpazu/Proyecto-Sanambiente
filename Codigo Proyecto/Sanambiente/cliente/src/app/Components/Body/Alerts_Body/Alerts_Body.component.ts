import { Component, OnInit, HostBinding } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { AlertsService } from '../../../Services/Alerts_Service/Alerts_Service';

@Component({
  selector: 'app-alerts_body',
  templateUrl: './alerts_body.component.html',
  styleUrls: ['./alerts_body.component.css']
})
export class AlertsBodyComponent implements OnInit {

  public formAlert: FormGroup;
  public edit: boolean = false;
  public arrayAlerts;
  public lengthAlerts: number;
  public hide = false;

  constructor(private alertsService: AlertsService, private router: Router, private activedRoute: ActivatedRoute) {

    this.formAlert = new FormGroup({
      'nombre_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_alerta': new FormControl('', [Validators.required, Validators.maxLength(249.9)]),
      'tipo_alerta': new FormControl('', [Validators.required]),
    });
    this.arrayAlerts = {

      nombre_alerta: '',
      observacion_alerta: '',
      tipo_alerta: ''
      
    };
  }

  ngOnInit(): void {
    this.viewDataById()
  }

  @HostBinding('class') classes = 'row';

  async createAlert() {
    if (this.formAlert.valid) {
      await this.alertsService.createAlert(this.formAlert.value);
      alert('Alerta creada correctamente');
      this.router.navigate(['/alert']);
    }
  }

  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_alerta;
    if (id !== undefined) {
      let alert = await this.alertsService.viewAlertById(id).subscribe((element: any) => {
        this.arrayAlerts = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

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
