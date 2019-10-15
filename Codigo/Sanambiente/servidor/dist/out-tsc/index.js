import Express from 'express'; // importo application para poder usarlo con la propiedad app
import Morgan from 'morgan';
import Cors from 'cors';
import RegionsRoutes from './Components/Regions_Component/Regions_Route';
import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
/***
 * Instances
 */
const appServer = Express();
/***
 * Middlewares
 */
appServer.use(Morgan('dev'));
appServer.use(Cors());
appServer.use(Express.json());
appServer.use(Express.urlencoded({ extended: false }));
/***
 * Routes
 */
useExpressServer(appServer, {
    routePrefix: "/api",
    controllers: [RegionsRoutes]
});
/***
 * Listen Server
*/
appServer.listen(3000, () => console.log(`http://loocalhost:${3000}`));
