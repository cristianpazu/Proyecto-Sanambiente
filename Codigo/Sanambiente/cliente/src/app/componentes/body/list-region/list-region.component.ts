import { Component, OnInit, HostBinding  } from '@angular/core';
import { RegionesService } from '../../../servicios/serviciosRegion/regiones.service'; //importo el servicio

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.css']
})
export class ListRegionComponent implements OnInit {

  @HostBinding('class') classes='row';

  listaregiones:any=[]; // propiedad de tipo arreglo que me almacenara las regiones encontrados
  searchText;
  constructor(private regionesServicio: RegionesService) { }

  ngOnInit() {
    this.obtenerRegiones();// refresca la lista de las regiones cada vez que creo una region nueva
  }
  obtenerRegiones() {
    this.regionesServicio.obtenerRegiones().subscribe(
      async (res: any) => {
        this.listaregiones = await res.regiones;
        
      },

      err => console.error(err)
    );
  }
}
