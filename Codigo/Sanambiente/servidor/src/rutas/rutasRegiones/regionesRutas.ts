import {Router} from 'express';
import regionControlador from '../../controlador/controladorRegiones/regionesControlador';

class RegionesRutas{
public router: Router=Router();

constructor(){
    this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
    // y despues ejecuta ese metodo configuracion.
    }
    configuracion():void{
        this.router.get('/',regionControlador.listarRegiones); // La ruta inicial de la aplicacion, cuando visiten la ruta
        //inicial voy a listar TODAS las regiones
        this.router.get('/:id_region',regionControlador.listarRegion);
        this.router.post('/',regionControlador.crearRegion);
       // this.router.delete('/:id',sanambienteControlador.eliminar);
        this.router.put('/:id_region',regionControlador.actualizarRegion);
    }
}

const regionesRutas=new RegionesRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
export default regionesRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"

// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.