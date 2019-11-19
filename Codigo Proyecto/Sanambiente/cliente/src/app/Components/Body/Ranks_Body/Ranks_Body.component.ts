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

  ngOnInit() {
  }

  public formRank: FormGroup;
  public stationRank: Array<any> = [];
  public arrayRanks: any;
  //public stationSelect: number;
  public edit = false;
  public hide = false;

  @HostBinding('class') classes = 'row';

  constructor(private ranksService: RanksService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formRank = new FormGroup({
      'nombre_rango': new FormControl('', [Validators.required, Validators.maxLength(49.9),Validators.pattern(/^[a-zA-Z]*$/)]),
      'valor_minimo': new FormControl('', [Validators.required, Validators.maxLength(19.9), Validators.pattern(/^[0-9]\d{0,20}$/)]),
      'valor_maximo': new FormControl('', [Validators.required, Validators.maxLength(19.9), Validators.pattern(/^[0-9]\d{0,20}$/)]),
      'id_estacion': new FormControl('', [Validators.required]),
      'observacion_rango': new FormControl('', [Validators.required, Validators.maxLength(49.9),Validators.pattern(/^[a-zA-Z]*$/)]),
    })
    this.arrayRanks = {
      observacion_rango: ''
    };
  }
// /^[a-zA-Z]*$/
  async createRank() {
    if (this.formRank.valid) {
      await this.ranksService.createRank(this.formRank.value);
      alert('Rango creado correctamente');
      this.router.navigate(['/rank']);
    }
  }
  async viewStation() {
    this.stationRank = (await this.ranksService.viewStation());
  }
}
