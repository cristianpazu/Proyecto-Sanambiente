import { Component, OnInit, HostBinding  } from '@angular/core';
import { CiudadesService } from '../../../servicios/serviciosCiudad/ciudades.service'; //importo el servicio

@Component({
  selector: 'app-list-ciudad',
  templateUrl: './list-ciudad.component.html',
  styleUrls: ['./list-ciudad.component.css']
})
export class ListCiudadComponent implements OnInit {

  @HostBinding('class') classes='row';

  listarciudades:any=[]; // propiedad de tipo arreglo que me almacenara las regiones encontrados
  searchText;
  constructor(private ciudadesServicio: CiudadesService) { }

  ngOnInit() {
    this.obtenerCiudades();// refresca la lista de las regiones cada vez que creo una region nueva
  }
  obtenerCiudades() {
    this.ciudadesServicio.obtenerCiudades().subscribe(
      async (res: any) => {
        this.listarciudades = await res.ciudades;
      },
      err => console.error(err)
    );
  }
}

