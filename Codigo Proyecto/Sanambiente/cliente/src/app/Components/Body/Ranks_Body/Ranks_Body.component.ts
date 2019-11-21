/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan loss rangos*/

import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { RanksService } from '../../../Services/Ranks_Service/Ranks_Service';

@Component({
  selector: 'app-Ranks_Body',
  templateUrl: './Ranks_Body.component.html',
  styleUrls: ['./Ranks_Body.component.css']
})
export class RanksBodyComponent implements OnInit {

  public formRank: FormGroup;
  public stationRank: Array<any> = [];
  public arrayRanks: any;
  public edit = false;
  public hide = false;

  @HostBinding('class') classes = 'row';

  constructor(private ranksService: RanksService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formRank = new FormGroup({
      'nombre_rango': new FormControl('', [Validators.required, Validators.maxLength(49.9)/*, Validators.pattern(/^[a-zA-Z]*$/)*/]),
      'valor_minimo': new FormControl('', [Validators.required, Validators.maxLength(19.9), Validators.pattern(/^[0-9]\d{0,20}$/)]),
      'valor_maximo': new FormControl('', [Validators.required, Validators.maxLength(19.9), Validators.pattern(/^[0-9]\d{0,20}$/)]),
      'id_estacion': new FormControl('', [Validators.required]),
      'observacion_rango': new FormControl('', [Validators.required, Validators.maxLength(49.9)/*, Validators.pattern(/^[a-zA-Z]*$/)*/]),
    })
    this.arrayRanks = {
      nombre_rango: '',
      observacion_rango: ''
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Ranks_Body */
  ngOnInit(): void {
    this.viewStation(); // Carga las estaciones existentes
    this.viewRankById(); // Toma el id del rango, cuando se vaya a editar alguno de ellos.
  }

  /* Método con el cual se crea un nuevo rango */
  async createRank() {
    if (this.formRank.valid) {
      await this.ranksService.createRank(this.formRank.value);
      alert('Rango creado correctamente');
      this.router.navigate(['/rank']);
    }
  }

  /* Método con el cual se listan las estaciones existentes */
  async viewStation() {
    this.stationRank = (await this.ranksService.viewStation());
  }

    /* Método con el cual se identifica el rango cuya información va a ser actualizada */
    async viewRankById() {
      let id = this.activedRoute.snapshot.params.id_rango;
      if (id !== undefined) {
        let rango = await this.ranksService.viewRankById(id).subscribe(async (element: any) => {
          this.arrayRanks = await element.message[0];
          console.log(this.arrayRanks);
          this.edit = true;
          this.hide = true;
        });
      }
    }
  
    /* Método con el cual se actualiza la información del rango seleccionado */
    async updateRank() {
      let id = this.activedRoute.snapshot.params.id_rango;
      this.formRank.patchValue({
        nombre_rango: this.arrayRanks.nombre_rango,
        valor_minimo: this.arrayRanks.valor_minimo,
        valor_maximo: this.arrayRanks.valor_maximo,
        observacion_rango: this.arrayRanks.observacion_rango,
        id_estacion: this.arrayRanks.id_estacion,
      })
      this.ranksService.updateRank(this.formRank.value, id)
      alert('Rango actualizado correctamente');
      this.router.navigate(['/rank']);
    }
}
