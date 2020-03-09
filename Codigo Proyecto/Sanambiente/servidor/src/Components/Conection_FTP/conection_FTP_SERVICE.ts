const Client = require('ftp');
import { readFile, createWriteStream } from 'fs';
import { Request, Response } from 'express';
import { CONFIG_FTP, csvJSON } from '../../Hanldlers/Handle_FTP';
import ConnectionDataBase from '../../basedatos';
import handleMessage from '../../Hanldlers/Handle_Message';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';

class ConnectionFTPService {

    createFTP(request: Request, response: Response): void {
        const {ip_ftp, puerto_ftp, usuario_ftp, contrasena_ftp, id_plantilla, id_estacion, id_conexion} = request.body;
        let buildDataResult: any = { id_plantilla, id_estacion, id_conexion }
       let c = new Client();
        c.connect(CONFIG_FTP(ip_ftp, puerto_ftp, usuario_ftp, contrasena_ftp));
        c.list((err: any, list: any) => {
            if (err) throw err;
            c.get(list[0].name, (error: any, stream: any) => {
                if (err) throw err;
                else {
                    stream.once('close', function () { c.end(); });
                    stream.pipe(createWriteStream('C:/Users/admin/Downloads/data.cvc'));
                    readFile('C:/Users/admin/Downloads/data.cvc', "utf8", (err, data) => {
                        if (err) throw err;
                        let values = csvJSON(data)[0];
                        let valuesArray: Array<any> = [];
                        let count = 0;
                        for (let i = 1; i < values.length; i++) {
                            buildDataResult.fecha_dato_crudo = values[0];
                            if(values[i] !== '1' && values[i] !== '0' && values[i] !== '\r') {
                                valuesArray.push( [id_plantilla, id_estacion, id_conexion, (count++) ,values[i], values[1]]);
                            }
                        }
                        for (let i = 1; i < valuesArray.length; i++) {
                            ConnectionDataBase.query('INSERT INTO datos_crudos(id_plantilla, id_estacion, id_conexion, posicion_variable, valor_variable, fecha_data_crudo) VALUES($1,$2,$3,$4,$5,$6)',
                            valuesArray[i], (err: any, data: any) => {
                                   if (err) throw err;
                                   return console.log("success");
                               });
                       }
                    })
                }
            });
        });
    }

    async viewFTPDATA(request: Request, response: Response) {
        try {
            let templates = await ConnectionDataBase.query(handlerQuery['viewConection']);
            return Promise.resolve(handleMessage(response, 200, templates.rows));
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
    }
}

const connectionFTPService = new ConnectionFTPService();
export default connectionFTPService;