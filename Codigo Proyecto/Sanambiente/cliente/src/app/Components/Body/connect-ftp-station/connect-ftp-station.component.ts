/* Clase que contiene los metodos y la logica de la vista html en la cual se crean conexiones ftp*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro


@Component({
  selector: 'app-connect-ftp-station',
  templateUrl: './connect-ftp-station.component.html',
  styleUrls: ['./connect-ftp-station.component.css']
})
export class ConnectFTPStationComponent implements OnInit {

  public formFtp: FormGroup; // La variable formAlert permite administrar las validaciones y restricciones del formulario

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.
 
  constructor(private router: Router, private activedRoute: ActivatedRoute) {

    this.formFtp = new FormGroup({
      'puerto_ftp': new FormControl('', [Validators.required, Validators.pattern(/^[0-9-]\d{0,50}$/)]),
      'usuario_ftp': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'contrasena_ftp': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'ip_ftp': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });

  }

  ngOnInit(): void {
  }

  /* Método con el cual conecta */
  async connectFtp() {

  }

}
