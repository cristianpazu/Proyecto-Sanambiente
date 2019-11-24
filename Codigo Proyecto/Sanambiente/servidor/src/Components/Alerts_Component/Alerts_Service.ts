/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Alerta */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class AlertService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_alerta, observacion_alerta, tipo_alerta } = request.body;
            await ConnectionDataBase.query(handlerQuery['createAlert'], [nombre_alerta, observacion_alerta, tipo_alerta]);
            return Promise.resolve(handleMessage(response, 200, 'Create alert'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_alerta } = request.params;
            let { nombre_alerta, observacion_alerta, tipo_alerta } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateAlert'], [nombre_alerta, observacion_alerta, tipo_alerta, id_alerta]);
            return Promise.resolve(handleMessage(response, 200, 'Update alert'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las alertas en una lista desplegable. Lo utiliza la vista de base de tiempo
    async viewNameAlertsTime(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewAlertsTime']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las Alertas con todos sus campos los cuales se listan en la tabla de Alerta
    async view(request: Request, response: Response): Promise<any> {
        try {
            let alerts = await ConnectionDataBase.query(handlerQuery['viewAlerts']);
            return Promise.resolve(handleMessage(response, 200, alerts.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la Alerta con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Alerta
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_alerta } = request.params;
            let alert = await ConnectionDataBase.query(handlerQuery.viewAlert, [id_alerta]);
            console.log(alert.rows);
            if (alert.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Alert doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, alert.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const alertService = new AlertService();
export default alertService;