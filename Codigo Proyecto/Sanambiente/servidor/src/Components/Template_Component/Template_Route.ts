/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Base de tiempo*/

 import { Router } from 'express';
 import templateService from './Template_Service';
 
 class TemplateRoute {
     
     public router: Router = Router();
 
     constructor() {
         this.configuracion();
     }
 
     /* Se establecen los metodos de la clase TimesRoute, que seran utilizados 
     cuando se llame a cada una de  las rutas de Base de tiempo*/
 
     configuracion(): void {
        this.router.post('/createTemplate', templateService.create);
     }
 }
 
 // Se crea y exporta una constante que contiene las rutas de esta clase.
 const timesRoutes = new TemplateRoute(); 
 export default timesRoutes.router; 