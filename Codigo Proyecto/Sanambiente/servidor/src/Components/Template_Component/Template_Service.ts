/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */

 import BaseService from '../Base_Component/Base_Service';
 import ConnectionDataBase from '../../basedatos';
 import { handlerQuery } from '../../Hanldlers/Handle_Queries';
 import { Request, Response } from 'express';
 import handleMessage from '../../Hanldlers/Handle_Message';
 
 // Se "llenan" los metodos abstractos creados en la clase BaseService.ts
 class TemplateService implements BaseService<any> {

     update(request: Request, response: Response): Promise<any> {
         throw new Error("Method not implemented.");
     }
     view(request: Request, response: Response): Promise<any> {
         throw new Error("Method not implemented.");
     }
     viewById(request: Request, response: Response): Promise<any> {
         throw new Error("Method not implemented.");
     }
 
    //metodo para crear una base de tiempo
     async create(request: Request, response: Response): Promise<any> {
         try {
            let data = request.body;
            for (let index = 0; index < data.length; index++) {
                ConnectionDataBase.query('INSERT INTO plantillas (id_plantilla, id_estacion, nombre_plantilla, id_variable, posicion_variable) VALUES($1, $2, $3, $4, $5)', data[index], (error: any, data: any) => {
                    (error) ? console.log(error) : console.log('Success');
                })
            }
             return Promise.resolve(handleMessage(response, 200, 'Create Time'));
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
     }
 }
 
 // Se crea y exporta una constante que contiene los servicios de esta clase.
 const timesService = new TemplateService();
 export default timesService;