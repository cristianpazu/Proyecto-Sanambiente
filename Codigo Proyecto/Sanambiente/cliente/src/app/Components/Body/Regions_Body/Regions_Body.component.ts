import { Component, OnInit, HostBinding } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro

import { RegionsService } from '../../../Services/Regions_Service/Regions_Service'; //importo el servicio

@Component({
  selector: 'app-Regions_Body',
  templateUrl: './Regions_Body.component.html',
  styleUrls: ['./Regions_Body.component.css']
})
export class RegionsBodyComponent implements OnInit {

  ngOnInit(): void {
    this.viewDataById()
  }

  public formRegion: FormGroup;

  @HostBinding('class') classes = 'row';

  public edit: boolean = false;
  public arrayRegions;
  public lengthRegions: number;
  public hide=false;

  constructor(private regionService: RegionsService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionServicio
    this.formRegion = new FormGroup({
      'nombre_region': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      'observacion_region': new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
    this.arrayRegions = {};
  }


  async createRegion() {
    if (this.formRegion.valid) {
      await this.regionService.createRegion(this.formRegion.value);
      this.router.navigate(['/region']);
    }
  }
  

  async viewDataById() {
    let id = this.activedRoute.snapshot.params.id_region;
    if(id !== undefined) {
      let region = await this.regionService.viewRegionById(id).subscribe((element: any) => {
        this.arrayRegions = element.message[0];
        this.edit = true;
        this.hide= true;
      });
    }
  }

  async updateRegion() {
    let id = this.activedRoute.snapshot.params.id_region;
    this.formRegion.patchValue({
      nombre_region: this.arrayRegions.nombre_region,
      observacion_region: this.arrayRegions.observacion_region
    })
    this.regionService.updateRegion(this.formRegion.value, id)
      this.router.navigate(['/region']);
  }
}
