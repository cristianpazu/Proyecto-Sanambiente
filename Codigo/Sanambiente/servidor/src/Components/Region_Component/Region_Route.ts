import { Router } from 'express';
import RouteService from './Region_Service';
import RegionService from './Region_Service';

class RegionRoute {
    
    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    configuracion(): void {
       this.router.post('/createRegion', RegionService.create);
       this.router.get('/viewRegionById/:id_region', RegionService.viewById);
       this.router.get('/viewRegions', RegionService.viewR);
       this.router.put('/updateRegions/:id_region', RegionService.update);
       this.router.get('/viewRegion', RegionService.view)
    }
}

const regionRoutes = new RegionRoute(); 
export default regionRoutes.router; 