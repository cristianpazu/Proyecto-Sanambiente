/* Clase que contiene los metodos y la logica de la vista html en la cual se crean conexiones ftp*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding, Input } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { ConnectFtpStationService } from 'src/app/Services/connect-ftp-station/connect-ftp-station.service';
import { RanksService } from 'src/app/Services/Ranks_Service/Ranks_Service';


@Component({
  selector: 'app-connect-ftp-station',
  templateUrl: './connect-ftp-station.component.html',
  styleUrls: ['./connect-ftp-station.component.css']
})
export class ConnectFTPStationComponent implements OnInit {

  public formFtp: FormGroup; // La variable formAlert permite administrar las validaciones y restricciones del formulario
  //public stationRank: Array<any>;

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.
 
  constructor(private router: Router, private activedRoute: ActivatedRoute, private connectionFTPService: ConnectFtpStationService, private ranksService: RanksService) {
    this.formFtp = new FormGroup({
      'id_conexion': new FormControl(),
      'id_plantilla': new FormControl(),
      'id_estacion': new FormControl(''),
      'puerto_ftp': new FormControl('', [Validators.required, Validators.pattern(/^[0-9-]\d{0,50}$/)]),
      'usuario_ftp': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'contrasena_ftp': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'ip_ftp': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
  }

  async ngOnInit() {
    this.viewStations();
    const count = await this.getCountDATA();
    this.formFtp.get('id_conexion').setValue(count);

  }

  /* Método con el cual conecta */
  async connectFtp() {
    if(this.formFtp.valid) {
      const info =  (await this.connectionFTPService.createConnectionFTP(this.formFtp.value));
      if (info === 'La cantidad de variables no corresponde a la plantilla') {
        alert('La cantidad de variables no corresponde a la plantilla');
      } else {
        alert(info);
        return this.router.navigate(['/connect'])
      }
    }
  }

  async  viewStations() {
    let params = this.activedRoute.snapshot.params;
    this.formFtp.get('id_estacion').setValue(params.id_estacion);
    this.formFtp.get('id_plantilla').setValue(params.id_plantilla);
  }

  async getCountDATA() {
    const data: any = await this.connectionFTPService.viewDataFTP();
    console.log(data)
    const lengthData: number = data.length;
    if(lengthData === 0 ) {
      return 1;
    }else {
      return data[lengthData-1].id_conexion+1;
    }
}

}
