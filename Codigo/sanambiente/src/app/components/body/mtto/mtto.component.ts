import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mtto',
  templateUrl: './mtto.component.html',
  styleUrls: ['./mtto.component.css']
})
export class MttoComponent implements OnInit {

  forma:FormGroup;
  public current_date=new Date();
  
  constructor() { 

    this.forma = new FormGroup({
      'nombre': new FormControl('' , [Validators.required, Validators.minLength(3)]),
      'observacion': new FormControl('', [Validators.nullValidator,Validators.maxLength(245)])
    })


  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );
  }


  ngOnInit() {
  }

}
