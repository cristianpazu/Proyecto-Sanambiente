/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los mantenimientos*/

import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { MaintenancesService } from '../../../Services/Maintenances_Service/Maintenances_Service';

@Component({
  selector: 'app-Maintenances_Body',
  templateUrl: './Maintenances_Body.component.html',
})
export class MaintenancesBodyComponent implements OnInit {

  public formMaintenance: FormGroup;
  public stationMaintenance: Array<any> = [];
  public arrayMaintenance: any;
  public edit = false;
  public hide = false;

  @HostBinding('class') classes = 'row';

  constructor(private maintenancesService: MaintenancesService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formMaintenance = new FormGroup({
      'id_estacion': new FormControl('', [Validators.required]),
      'nombre_funcionario': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[a-z ]*$/)]),
      'novedad_mantenimiento': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[a-z ]*$/)]),
    })
    this.arrayMaintenance = {
        novedad_mantenimiento: ''//Se usa para definir el campo novedad_mantenimiento y poder mostrar el conteo de caracteres restantes
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Maintenances_Body */
  ngOnInit(): void {
    this.viewStationsMaintenance(); // Carga las estaciones existentes
    this.viewMaintenanceById(); // Toma el id del Mantenimiento, cuando se vaya a editar alguno de ellos.
  }

  /* Método con el cual se crea un nuevo Mantenimiento */
  async createMaintenance() {
    if (this.formMaintenance.valid) {
      await this.maintenancesService.createRank(this.formMaintenance.value);
      alert('Mantenimiento creado correctamente');
      this.router.navigate(['/maintenance']);
    }
  }

  /* Método con el cual se listan las estaciones existentes */
  async viewStationsMaintenance() {
    this.stationMaintenance = (await this.maintenancesService.viewStationsMaintenance());
    console.log(this.stationMaintenance);
  }

    /* Método con el cual se identifica el mantenimiento cuya información va a ser actualizada */
    async viewMaintenanceById(){
      let id = this.activedRoute.snapshot.params.id_mantenimiento;
      if (id !== undefined) {
        let mantenimiento = await this.maintenancesService.viewMaintenanceById(id).subscribe(async (element: any) => {
          this.arrayMaintenance = await element.message[0];
          this.edit = true;
          this.hide = true;
        });
      }
    }
  
    /* Método con el cual se actualiza la información del rango seleccionado */
    async updateMaintenance() {
      let id = this.activedRoute.snapshot.params.id_mantenimiento;
      this.formMaintenance.patchValue({
        nombre_funcionario: this.arrayMaintenance.nombre_funcionario,
        novedad_mantenimiento: this.arrayMaintenance.novedad_mantenimiento
      })
      this.maintenancesService.updateMaintenance(this.formMaintenance.value, id)
      alert('Mantenimiento actualizado correctamente');
      this.router.navigate(['/maintenance']);
    }
}
