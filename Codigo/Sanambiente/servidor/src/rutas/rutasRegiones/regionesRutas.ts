import {Router} from 'express';
import regionesControlador from '../../controlador/controladorRegiones/regionesControlador';

// cambie el nombre de regionControlador a regionesControlador
class RegionesRutas{
public router: Router=Router();

constructor(){
    this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
    // y despues ejecuta ese metodo configuracion.
    }
    configuracion():void{
        this.router.get('/',regionesControlador.listarRegiones); // La ruta inicial de la aplicacion, cuando visiten la ruta
        //inicial voy a listar TODAS las regiones
        this.router.get('/:id_region',regionesControlador.listarRegion);
        this.router.post('/',regionesControlador.crearRegion);
       // this.router.delete('/:id',sanambienteControlador.eliminar);
        this.router.put('/:id_region',regionesControlador.actualizarRegion);
    }
}

const regionesRutas=new RegionesRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
export default regionesRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"

// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.