/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */

 import BaseService from '../Base_Component/Base_Service';
 import ConnectionDataBase from '../../basedatos';
 import { handlerQuery } from '../../Hanldlers/Handle_Queries';
 import { Request, Response } from 'express';
 import handleMessage from '../../Hanldlers/Handle_Message';
 
 // Se "llenan" los metodos abstractos creados en la clase BaseService.ts
 class TimeService implements BaseService<any> {
 
     async create(request: Request, response: Response): Promise<any> {
         try {
             let { nombre_tiempo, escala_tiempo, observacion_tiempo, alerta_tiempo } = request.body;
             await ConnectionDataBase.query(handlerQuery['createTime'], [nombre_tiempo, escala_tiempo, observacion_tiempo, alerta_tiempo]);
             return Promise.resolve(handleMessage(response, 200, 'Create Time'));
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
     }
 
     async update(request: Request, response: Response): Promise<any> {
         try {
             const { id_tiempo } = request.params;
             let { nombre_tiempo, escala_tiempo, observacion_tiempo, alerta_tiempo } = request.body;
             await ConnectionDataBase.query(handlerQuery['updateTime'], [nombre_tiempo, escala_tiempo, observacion_tiempo, alerta_tiempo, id_tiempo]);
             return Promise.resolve(handleMessage(response, 200, 'Update Time'))
 
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
     }
 
     async view(_: Request, response: Response): Promise<any> {
         try {
             let times = await ConnectionDataBase.query(handlerQuery['viewTimes']);
             return Promise.resolve(handleMessage(response, 200, times.rows));
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
     }
 
     async viewById(request: Request, response: Response): Promise<any> {
         try {
             const { id_tiempo } = request.params;
             let time = await ConnectionDataBase.query(handlerQuery.viewTime, [id_tiempo]);
             console.log(time.rows);
             if (time.rows.length === 0) {
                 return Promise.resolve(handleMessage(response, 200, 'Alert doesn´t exist'));
             } else {
                 return Promise.resolve(handleMessage(response, 200, time.rows));
             }
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
     }
 }
 
 // Se crea y exporta una constante que contiene los servicios de esta clase.
 const timesService = new TimeService();
 export default timesService;