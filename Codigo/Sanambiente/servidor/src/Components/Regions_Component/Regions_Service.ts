import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';


class RegionService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_region, observacion_region } = request.body;
            await ConnectionDataBase.query(handlerQuery['createRegion'], [nombre_region, observacion_region]);
            return Promise.resolve(handleMessage(response, 200, 'Create Region'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_region } = request.params;
            let { nombre_region, observacion_region } = request.body;
            console.log(id_region, '\n', request.body)
            await ConnectionDataBase.query(handlerQuery['updateRegion'], [nombre_region, observacion_region, id_region]);
            return Promise.resolve(handleMessage(response, 200, 'Update Region'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async view(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewRegionsCity']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewR(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewRegions']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_region } = request.params;
            let region = await ConnectionDataBase.query(handlerQuery.viewRegion, [id_region]);
            if (region.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Region doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, region.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

const regionService = new RegionService();
export default regionService;