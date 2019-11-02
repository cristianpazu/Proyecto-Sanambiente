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
  public stationSelect: number;
  public edit = false;
  public hide = false;

  @HostBinding('class') classes = 'row';

  constructor(private ranksService: RanksService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formRank = new FormGroup({
      'nombre_rango': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'valorMinimo': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'valorMaximo': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'observacion_rango': new FormControl('', [Validators.required, Validators.maxLength(250)]),
    })
  }

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
