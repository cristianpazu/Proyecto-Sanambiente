/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para mantenimiento*/

export interface Maintenance {
    id_mantenimiento?: number;
    id_estacion?:number;
    nombre_funcionario?: string;
    novedad_mantenimiento?: string;
}