import { Router } from 'express';
import { indexControlador } from '../controlador/indexControlador';
import CiudadesControlador from '../controlador/controladorCiudades/ciudadesControlador';

class IndexRutas {
    public router: Router = Router();

    constructor() {
        this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
        // y despues ejecuta ese metodo configuracion.
    }
    configuracion(): void {

        // 1. La ruta inicial de la aplicacion, cuando visiten la ruta inicial
        this.router.get('/home', indexControlador.index);
        //2. ruta que se utiliza para listar las regiones creadas id y nombre desde ciudades
        this.router.get('/api/ciudades/ciudades_regiones', CiudadesControlador.ciudadlistarRegiones);
    }
}

// 1. Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante llamada indexRutas
const indexRutas = new IndexRutas();

/*2. Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router" Nos vamos a index.ts 
y utilizo el enrutador "router" que acabo de crear.*/
export default indexRutas.router; 