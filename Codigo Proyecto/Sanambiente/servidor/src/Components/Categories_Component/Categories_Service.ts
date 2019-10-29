import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

class CategoryService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_categoria, observacion_categoria } = request.body;
            await ConnectionDataBase.query(handlerQuery['createCategory'], [nombre_categoria, observacion_categoria]);
            return Promise.resolve(handleMessage(response, 200, 'Create category'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error Crear conexion'));
        }
    }

    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_categoria } = request.params;
            let { nombre_categoria, observacion_categoria } = request.body;
            console.log(id_categoria, '\n', request.body)
            await ConnectionDataBase.query(handlerQuery['updateCategory'], [nombre_categoria, observacion_categoria, id_categoria]);
            return Promise.resolve(handleMessage(response, 200, 'Update category'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async view(_: Request, response: Response): Promise<any> {
        try {
            let categories = await ConnectionDataBase.query(handlerQuery['viewCategories']);
            return Promise.resolve(handleMessage(response, 200, categories.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_categoria } = request.params;
            let category = await ConnectionDataBase.query(handlerQuery.viewCategory, [id_categoria]);
            console.log(category.rows);
            if (category.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'City doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, category.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

const categoryService = new CategoryService();
export default categoryService;