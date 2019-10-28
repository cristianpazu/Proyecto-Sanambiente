import { Router } from 'express';
import CategoryService from './Categories_Service';


class CategoriesRoute {
    
    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    configuracion(): void {
       this.router.post('/createCategory', CategoryService.create);
       this.router.get('/viewCategoryById/:id_categoria', CategoryService.viewById);
       this.router.get('/viewCategories', CategoryService.view);
       this.router.put('/updateCategories/:id_categoria', CategoryService.update);
    }
}

const categoryRoute = new CategoriesRoute(); 
export default categoryRoute.router; 