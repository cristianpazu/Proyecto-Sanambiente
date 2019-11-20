import { Component, OnInit, HostBinding } from '@angular/core';
import { GmtService } from '../../../Services/Gmt_Service/Gmt_Service';



@Component({
  selector: 'app-Gmt_List',
  templateUrl: './Gmt_List.component.html',
  styleUrls: ['./Gmt_List.component.css']
})
export class GmtListComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayGmt: Array<any>;
  searchText;

  constructor(private gmtService: GmtService) {
    this.arrayGmt = [];
   }

  ngOnInit() {
    this.getGmt();
  }
  async getGmt(){
    this.arrayGmt = await this.gmtService.viewGmt();
  }

}
