import { Router } from 'express';
import CityService from './Cities_service';


class CitiesRoute {
    
    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    configuracion(): void {
       this.router.post('/createCity', CityService.create);
       this.router.get('/viewCityById/:id_ciudad', CityService.viewById);
       this.router.get('/viewCities', CityService.view);
       this.router.put('/updateCities/:id_ciudad', CityService.update);
    }
}

const citiesRoutes = new CitiesRoute(); 
export default citiesRoutes.router; 