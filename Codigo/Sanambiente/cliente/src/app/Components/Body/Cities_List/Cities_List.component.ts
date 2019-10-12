import { Component, OnInit, HostBinding  } from '@angular/core';
import { CitiesService } from '../../../Services/Cities_Service/Cities_Service'; //importo el servicio


@Component({
  selector: 'app-Cities_List',
  templateUrl: './Cities_List.component.html',
  styleUrls: ['./Cities_List.component.css']
})
export class CitiesListComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayCities:any=[];
  searchText;

  constructor(private cityService: CitiesService) { }

  ngOnInit() {
    this.getCities();
  }

  async getCities() {
    this.arrayCities = await this.cityService.viewCities();
    console.log(this.arrayCities);
  }

}


