import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MaintenancesService } from 'src/app/Services/Maintenances_Service/Maintenances_Service';
import { VariablesService } from 'src/app/Services/Variables_Service/Variables_Service';
import { TemplateService} from 'src/app/Services/Templates_Service/Templates_service';
import { StationsService } from 'src/app/Services/Stations_Service/Stations_Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public formTemplate: FormGroup;
  public stationArray: Array<any> = [];
  public variableArray:  Array<any> = [];
  public arrayAddVariable: Array<any> = [];
  public arrayForm: Array<any> = [];

  constructor(private maintenancesService: MaintenancesService, private variableService: VariablesService, private stationService: StationsService, private templateService: TemplateService, private router: Router) {
    this.formTemplate = new FormGroup({
      id_plantilla: new FormControl(),
      id_estacion: new FormControl(),
      nombre_plantilla: new FormControl(),
      id_variable: new FormControl(),
      posicion: new FormControl(),
    })
   }

  async ngOnInit() {
    this.viewStation();
    this.viewVariables();
    const count = await this.getCountTemplate()
    this.formTemplate.get('id_plantilla').setValue(count);
  }
  
  async viewStation() {
    this.stationArray = (await this.maintenancesService.viewStationsMaintenance());
  }

  async viewVariables() {
    this.variableArray = await this.variableService.viewVariables();
  }

  addField() {
      this.arrayAddVariable.push(this.formTemplate.value);
  }

  deleteField() {
    this.arrayAddVariable.pop();
  }

  saveInformation() {
      for (let index = 0; index < this.arrayAddVariable.length; index++) {
        this.arrayAddVariable[index].posicion = index + 1; 
        this.arrayForm.push(this.arrayAddVariable[index]);
      }
      this.formTemplate.value.posicion = this.arrayForm.length +1;
      this.arrayForm.push(this.formTemplate.value);    
      this.templateService.createTemplate(this.getValuesFormGroup(this.arrayForm));
      this.arrayForm = [];
      alert('Plantilla creada correctamente');
      this.router.navigate(['/connect']); 
  }

  getValuesFormGroup(arrayValues:  Array<any>) {
    let arrayInformation = [];
   arrayValues.forEach((elements) => {
     arrayInformation.push(Object.values(elements));
   })
   return arrayInformation;
  }

  async getCountTemplate() {
      const templates: any = await this.stationService.viewTemplatesStation();
      const lengthTemplate: number = templates.length;
      if(lengthTemplate === 0 ) {
        return 1;
      }else {
        return templates[lengthTemplate-1].id_plantilla+1;
      }
  }

}
