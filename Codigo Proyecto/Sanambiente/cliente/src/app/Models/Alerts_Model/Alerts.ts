/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para Alerta */

export interface Alert {
    id_alerta?: number;
    nombre_alerta?: string;
    observacion_alerta?: string;
    tipo_alerta?: string;
}