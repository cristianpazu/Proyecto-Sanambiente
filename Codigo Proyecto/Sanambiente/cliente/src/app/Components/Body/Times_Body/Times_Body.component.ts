import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { TimesService } from '../../../Services/Times_Service/Times_Service';// importo el servicio


@Component({
  selector: 'app-times_body',
  templateUrl: './times_body.component.html',
  styleUrls: ['./times_body.component.css']
})
export class TimesBodyComponent implements OnInit {

  public formTime: FormGroup;
  public edit: boolean = false;
  public arrayTimes;
  public lengthTimes: number;
  public hide=false;

  constructor(private timesService: TimesService, private router: Router, private activedRoute: ActivatedRoute) {// instancio el servicio dentro de una variable llamada timesService
    this.formTime = new FormGroup({
      'nombre_tiempo': new FormControl('', [Validators.required, Validators.maxLength(49.9) ]),
      'escala_tiempo': new FormControl('', [Validators.required,  Validators.max(1440)]),
      'observacion_tiempo': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'alerta_tiempo': new FormControl(),
    });
    this.arrayTimes = {
      observacion_tiempo: ''
    };
  }

  ngOnInit(): void {
    this.viewDataById()
  }

  @HostBinding('class') classes = 'row';

  async createTime() {
    if (this.formTime.valid) {
      await this.timesService.createTime(this.formTime.value);
      alert('Base de Tiempo creada correctamente');
      this.router.navigate(['/time']);
    }
  }
  
  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_tiempo;
    if(id !== undefined) {
      let time = await this.timesService.viewTimeById(id).subscribe((element: any) => {
        this.arrayTimes = element.message[0];
        this.edit = true;
        this.hide= true;
      });
    }
  }

  async updateTime() {
    let id = this.activedRoute.snapshot.params.id_tiempo;
    this.formTime.patchValue({
      nombre_tiempo: this.arrayTimes.nombre_tiempo,
      escala_tiempo: this.arrayTimes.escala_tiempo,
      observacion_tiempo: this.arrayTimes.observacion_tiempo,
      alerta_tiempo: this.arrayTimes.alerta_tiempo,
    })
    this.timesService.updateTime(this.formTime.value, id)
      alert('Base de Tiempo actualizada correctamente');
      this.router.navigate(['/time']);
  }
}


