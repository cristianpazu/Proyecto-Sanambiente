import { Component, OnInit, HostBinding  } from '@angular/core';
import { OrganizationsService } from '../../../Services/Organizations_Service/Organizations_Service'; //importo el servicio

@Component({
  selector: 'app-Organizations_List',
  templateUrl: './Organizations_List.component.html'
})
export class OrganizationsListComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayOrganizations: Array<any>;
  searchText;

  constructor(private organizationService: OrganizationsService) {
    this.arrayOrganizations = [];
   }

  ngOnInit() {
  this.getOrganizations();
  }
  async getOrganizations() {
    this.arrayOrganizations = await this.organizationService.viewOrganizations();
  }
}
