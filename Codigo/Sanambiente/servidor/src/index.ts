import express, {Application} from  'express'; // importo application para poder usarlo con la propiedad app
import morgan from 'morgan';
import cors from 'cors';

import indexRutas from './rutas/indexRutas';
import regionesRutas from './rutas/rutasRegiones/regionesRutas';
import ciudadesRutas from './rutas/rutasCiudades/ciudadesRutas';
import citiesRoutes from './Components/Cities_Component/Cities_Route';
import regionRoutes from './Components/Region_Component/Region_Route';

class Servidor{ // Clase que inicia el servidor usando typescript, del lado del servidor.
    public app: Application; // app es de tipo application

    constructor(){// el contructor incia el express. Pero express me devuelve un objeto, por eso guardo ese objeto dentro de
        // app que es una propiedad de la clase.
       this.app=express();
       // ejecuto estos metodos (configuracion y rutas) para que al ejecutar la aplicacion ellos configuren a app y 
       // asi no tener problemas
       this.configuracion(); 
       this.rutas();
    }
    configuracion(): void{ // la uso para poder configurar la propiedad app, este metodo no devuelve nada por eso es de
        //tipo void
        this.app.set('port', process.env.port || 3000); // Si existe un puerto definido por el servicio de nube tomelo, de lo 
        
        // contrario utilice el puerto 3000. Podria decirse que estamos creando una variable y su valor que puede ser accedida 
        // desde app.
        this.app.use(morgan('dev')); // permite ver las peticiones del cliente get, post, put y delete.
        this.app.use(cors()); // permite que angular le pueda pedir los datos al servidor.
        this.app.use(express.json()); // permite aceptar formatos json de aplicaciones clientes.
        this.app.use(express.urlencoded({extended: false})); // permite enviar desde un formulario html.
    }

    rutas(): void{ // metodo para establecer de app las rutas de mi servidor este metodo no devuelve nada porque lo 
        // va a configurar app, por eso es de tipo void.
        this.app.use('/',indexRutas); // utilizo el enrutador que exporte en el archivo indexRutas.ts
        this.app.use('/api/regiones',regionesRutas); // esta ruta solo estara disponible cuando el usuario ingrese a region
        this.app.use('/api/city', citiesRoutes);
        this.app.use('/api/region', regionRoutes);
    }

    iniciar():void{ // metodo para inicializar el servidor. Para ejecutar un tipico app.listen para que el servidor comience
        // a escuchar

        this.app.listen(this.app.get('port'), ()=>{ // aqui utilizamos el valor de la "variable" que creamos en el metodo
        // configuracion
            console.log('Servidor en puerto ', this.app.get('port')); // mensaje que se muestra por consola cuando todo se 
            //haya inicializado.
        }); 
    }
}

const servidor=new Servidor(); // Guardo dentro de una constante llamada servidor el objeto app que me devuelve 
// el metodo constructor de la clase servidor.
servidor.iniciar(); // ejecuto el metodo inicar de la clase servidor, para inicializar la aplicacion
