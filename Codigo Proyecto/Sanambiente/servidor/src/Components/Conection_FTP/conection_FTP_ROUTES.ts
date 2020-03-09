/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla ciudad */

 import { Router } from 'express';
import connectionFTPService from './conection_FTP_SERVICE';
 
 
 class ConnectionFTP {
 
     public router: Router = Router();
 
     constructor() {
         this.configuracion();
     }
     /* Se establecen los metodos de la clase City_Service, que seran utilizados cuando se llame a cada una de 
     las rutas de ciudades*/
 
     configuracion(): void {
         this.router.post('/createFTP', connectionFTPService.createFTP); 
         this.router.get('/viewFTP', connectionFTPService.viewFTPDATA);
     }
 }
 
 // Se crea y exporta una constante que contiene las rutas de esta clase.
 const connectionFTPRouter = new ConnectionFTP();
 export default connectionFTPRouter.router; 