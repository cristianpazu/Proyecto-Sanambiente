/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla de organizaciones */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class OrganizationService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_organizacion, observacion_organizacion } = request.body;
            await ConnectionDataBase.query(handlerQuery['createOrganizacion'], [nombre_organizacion, observacion_organizacion]);
            return Promise.resolve(handleMessage(response, 200, 'Create Organizacion'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_organizacion } = request.params;
            let { nombre_organizacion, observacion_organizacion } = request.body;
            console.log(id_organizacion, '\n', request.body)
            await ConnectionDataBase.query(handlerQuery['updateOrganizacion'], [nombre_organizacion, observacion_organizacion, id_organizacion]);
            return Promise.resolve(handleMessage(response, 200, 'Update Organizacion'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async view(request: Request, response: Response): Promise<any> {
        try {
            let organizations = await ConnectionDataBase.query(handlerQuery['viewOrganizations']);
            return Promise.resolve(handleMessage(response, 200, organizations.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_organizacion } = request.params;
            let organizacion = await ConnectionDataBase.query(handlerQuery.viewOrganization, [id_organizacion]);
            if (organizacion.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Organization doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, organizacion.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const organizationService = new OrganizationService();
export default organizationService;