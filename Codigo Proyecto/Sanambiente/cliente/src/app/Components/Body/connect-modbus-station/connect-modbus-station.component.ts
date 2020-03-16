import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectFtpStationService } from 'src/app/Services/connect-ftp-station/connect-ftp-station.service';
import { RanksService } from 'src/app/Services/Ranks_Service/Ranks_Service';

@Component({
  selector: 'app-connect-modbus-station',
  templateUrl: './connect-modbus-station.component.html',
  styleUrls: ['./connect-modbus-station.component.css']
})
export class ConnectModbusStationComponent implements OnInit {

  public formModbus: FormGroup; // La variable formAlert permite administrar las validaciones y restricciones del formulario
  public stationRank: Array<any>;

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.
 
  constructor(private router: Router, private activedRoute: ActivatedRoute, private connectionFTPService: ConnectFtpStationService, private ranksService: RanksService) {
    this.formModbus = new FormGroup({
      'id_conexion': new FormControl(),
      'id_plantilla': new FormControl(),
      'id_estacion': new FormControl(''),
      'puerto_Modbus': new FormControl('', [Validators.required, Validators.pattern(/^[0-9-]\d{0,50}$/)]),
      'usuario_Modbus': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'contrasena_Modbus': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'ip_Modbus': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.stationRank = new Array<any>();
  }

  async ngOnInit() {
    this.viewStations();
    const count = await this.getCountDATA();
    this.formModbus.get('id_conexion').setValue(count);

  }

  /* Método con el cual conecta */
  async connectModbus() {
    if(this.formModbus.valid) {
      this.connectionFTPService.createConnectionFTP(this.formModbus.value);
      return this.router.navigate(['/connect'])
    }
  }

  async  viewStations() {
    let params = this.activedRoute.snapshot.params;
    this.formModbus.get('id_estacion').setValue(params.id_estacion);
    this.formModbus.get('id_plantilla').setValue(params.id_plantilla);
    this.stationRank = await this.ranksService.viewStationsRank();
  }

  async getCountDATA() {
    const data: any = await this.connectionFTPService.viewDataFTP();
    const lengthData: number = data.length;
    if(lengthData === 0 ) {
      return 1;
    }else {
      return data[lengthData-1].id_conexion+1;
    }
  }
}
