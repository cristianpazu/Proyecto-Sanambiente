import {Router} from 'express';
import ciudadesControlador from '../../controlador/controladorCiudades/ciudadesControlador';

class CiudadesRutas{
public router: Router=Router();

constructor(){
    this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
    // y despues ejecuta ese metodo configuracion.
    }
    configuracion():void{
        this.router.get('/',ciudadesControlador.listarCiudades); // La ruta inicial de la aplicacion, cuando visiten la ruta
        //inicial voy a listar TODAS las regiones
        this.router.get('/:id_ciudad',ciudadesControlador.listarCiudad);
        this.router.post('/',ciudadesControlador.crearCiudad);
       // this.router.delete('/:id',sanambienteControlador.eliminar);
        this.router.put('/:id_ciudad',ciudadesControlador.actualizarCiudad);
    }
}

const ciudadesRutas=new CiudadesRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
export default ciudadesRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"

// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.