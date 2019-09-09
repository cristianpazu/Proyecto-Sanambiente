import {Router} from 'express';
import {indexControlador} from '../controlador/indexControlador';

class IndexRutas{
public router: Router=Router();

constructor(){
    this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
    // y despues ejecuta ese metodo configuracion.
    }
    configuracion():void{
        this.router.get('/home',indexControlador.index); // La ruta inicial de la aplicacion, cuando visiten la ruta inicial
        // voy a mostrar un hola; que lo traigo desde el metodo index de la clase index controlador
    }
}

const indexRutas=new IndexRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
export default indexRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"

// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.