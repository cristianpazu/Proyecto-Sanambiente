/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para mantenimiento*/

export interface Maintenance {
    id_mantenimiento?: number;
    id_estacion?:number;
    id_parte?:number;
    id_tipo_mantenimiento?: number;
    id_periodicidad?: number;
    fecha_inicial?: Date;
    fecha_final?: Date;
    nombre_funcionario?: string;
    validacion_mantenimiento?: boolean;
    novedad_mantenimiento?: string;
}