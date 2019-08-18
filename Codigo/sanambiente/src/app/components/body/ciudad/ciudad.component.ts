import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  forma:FormGroup;

  constructor() { 

    this.forma = new FormGroup({
      'nombre': new FormControl('' , [Validators.required, Validators.minLength(3)]),
      'observacion': new FormControl('', [Validators.nullValidator,Validators.maxLength(245)])
    })

    // this.guardarCambios();

  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );
  }


  ngOnInit() {
  }

}
