import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  forma:FormGroup;

  constructor() { 


    this.forma = new FormGroup({
      'nombre': new FormControl('' , [Validators.required, Validators.minLength(3)]),
      'observacion': new FormControl('', [Validators.nullValidator,Validators.maxLength(245)])
    })


  }


  ngOnInit() {
  }



}
