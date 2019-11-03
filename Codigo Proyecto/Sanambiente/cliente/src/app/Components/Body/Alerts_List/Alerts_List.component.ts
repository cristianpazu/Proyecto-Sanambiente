import { Component, OnInit, HostBinding } from '@angular/core';
import { AlertsService } from '../../../Services/Alerts_Service/Alerts_Service';//importo el servicio

@Component({
  selector: 'app-alerts_list',
  templateUrl: './alerts_list.component.html',
  styleUrls: ['./alerts_list.component.css']
})
export class AlertsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  public arrayAlerts: Array<any>;
  searchText;

  constructor(private alertsService: AlertsService) {

    this.arrayAlerts = [];

  }

  ngOnInit() {
    this.getAlerts();
  }

  async getAlerts() {

    this.arrayAlerts = await this.alertsService.viewAlerts();
  }

}
