/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para rango */

export interface Rank {
    id_rango?: number;
    nombre_rango?: string;
    valorMinimo?: number;
    valorMaximo?: number;
    id_estacion?:number;
    observacion_rango?: string;
}