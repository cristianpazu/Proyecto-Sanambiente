import { Component, OnInit, HostBinding } from '@angular/core';
import { CategoriesService } from '../../../Services/Categories_Service/Categories_Service';


@Component({
  selector: 'app-Categories_List',
  templateUrl: './Categories_List.component.html',
  styleUrls: ['./Categories_List.component.css']
})
export class CategoriesListComponent implements OnInit {

  @HostBinding('class') classes='row';

  public arrayCategories: Array<any>;
  searchText;


  constructor(private categoriesService: CategoriesService) {
    this.arrayCategories = [];
   }

  ngOnInit() {
    this.getCategories();
  }
  async getCategories(){
    this.arrayCategories = await this.categoriesService.viewCategories();
  }
}
