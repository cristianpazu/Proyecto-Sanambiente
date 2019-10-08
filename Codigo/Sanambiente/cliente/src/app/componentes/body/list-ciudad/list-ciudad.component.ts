import { Component, OnInit, HostBinding  } from '@angular/core';
import { CiudadesService } from '../../../servicios/serviciosCiudad/ciudades.service'; //importo el servicio


@Component({
  selector: 'app-list-ciudad',
  templateUrl: './list-ciudad.component.html',
  styleUrls: ['./list-ciudad.component.css']
})
export class ListCiudadComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayCities:any=[];
  searchText;

  constructor(private cityService: CiudadesService) { }

  ngOnInit() {
    this.getCities();
  }

  async getCities() {
    this.arrayCities = await this.cityService.viewCities();
  }

}


