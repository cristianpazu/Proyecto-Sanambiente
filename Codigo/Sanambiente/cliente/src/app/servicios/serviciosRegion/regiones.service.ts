import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'; // Modulo que permite pedir los datos
// HttpClient es una interfaz que permite hacer peticiones http

import { Region } from '../../modelos/modeloRegion/Region'; // importo la interfaz que cree en region.ts
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  API_URI='http://localhost:3000/api'; // almaceno la ruta de region dentro de una variable

  constructor(private http: HttpClient) { } // Intancio la interfaz HttpClient mediante una variable de tipo HttpClient en el constructor
  
  obtenerRegiones(){ // obtiene las regiones guardadas en el servidor
    return this.http.get(`${this.API_URI}/regiones`); // retorna todas las regiones desde el modulo http haciendo una petecion get desde mi api
  }

  obtenerRegion(id_region: string){
    return this.http.get(`${this.API_URI}/regiones/${id_region}`); // retorna una region que coincida con el id que le estoy pasando
  }

  guardarRegion(region: Region){ // al momento de guardar una region necesito un objeto de tipo Region. Utilizo la interfaz importada desde region.ts
    return this.http.post(`${this.API_URI}/regiones`, region); // envio una petecion post a mi api con el objeto region que cree
  }

  actualizarRegion(id_region: string|number, nuevosDatosregion: Region): Observable<Region>{ 
    // envio una peticion put a mi api donde actualizo la region que corresponda al id que envio con los 
    //datos actualizados que estan guardados dentro de la varible nuevosDatosregion
    return this.http.put(`${this.API_URI}/regiones/${id_region}`,nuevosDatosregion); 
  }
}
