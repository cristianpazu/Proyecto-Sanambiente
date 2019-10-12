import { Component, OnInit, HostBinding  } from '@angular/core';
import { RegionsService } from '../../../Services/Regions_Service/Regions_Service'; //importo el servicio

@Component({
  selector: 'app-Regions_List',
  templateUrl: './Regions_List.component.html',
  styleUrls: ['./Regions_List.component.css']
})
export class RegionsListComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayRegions:any=[];
  searchText;

  constructor(private regionService: RegionsService) { }

  ngOnInit() {
  this.getRegions();
  }
  async getRegions() {
    this.arrayRegions = await this.regionService.viewRegions();
  }
}
