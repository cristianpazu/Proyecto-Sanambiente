import { Component, OnInit, HostBinding  } from '@angular/core';
import { RegionesService } from '../../../servicios/serviciosRegion/regiones.service'; //importo el servicio

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.css']
})
export class ListRegionComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayRegions:any=[];
  searchText;

  constructor(private regionService: RegionesService) { }

  ngOnInit() {
  this.getRegions();
  }
  async getRegions() {
    this.arrayRegions = await this.regionService.viewRegions();
  }
}
