// creo una interfaz para poder crear un tipo de dato region y utilizarlo en regiones.service.ts
// para crear un juego

export interface Region {
// le agrego el ? porque el dato no esta predeterminado
id_region?: number; 
nombre_region?: string;
observacion_region?: string
}