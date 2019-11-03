import { Component, OnInit, HostBinding } from '@angular/core';
import { TimesService } from '../../../Services/Times_Service/Times_Service';// importo el servicio

@Component({
  selector: 'app-Times_List',
  templateUrl: './Times_List.component.html',
  styleUrls: ['./Times_List.component.css']
})
export class TimesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  public arrayTimes: any = [];
  searchText;

  constructor(private timeService: TimesService) { }

  ngOnInit() {

    this.getTimes();
  }

  async getTimes() {
    this.arrayTimes = await this.timeService.viewTimes();
    
  }

}
