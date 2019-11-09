/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para estacion */

export interface Station {
    id_estacion?: number; 
    nombre_estacion?: string;
    id_region?:number;
    observacion_estacion?: string;
}



// nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, gmt_estacion, protocolo_estacion