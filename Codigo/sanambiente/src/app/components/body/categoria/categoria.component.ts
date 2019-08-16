import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  forma:FormGroup;

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
