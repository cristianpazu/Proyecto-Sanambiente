"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importo application para poder usarlo con la propiedad app
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRutas_1 = __importDefault(require("./rutas/indexRutas"));
const regionesRutas_1 = __importDefault(require("./rutas/rutasRegiones/regionesRutas"));
class Servidor {
    constructor() {
        // app que es una propiedad de la clase.
        this.app = express_1.default();
        // ejecuto estos metodos (configuracion y rutas) para que al ejecutar la aplicacion ellos configuren a app y 
        // asi no tener problemas
        this.configuracion();
        this.rutas();
    }
    configuracion() {
        //tipo void
        this.app.set('port', process.env.port || 3000); // Si existe un puerto definido por el servicio de nube tomelo, de lo 
        // contrario utilice el puerto 3000. Podria decirse que estamos creando una variable y su valor que puede ser accedida 
        // desde app.
        this.app.use(morgan_1.default('dev')); // permite ver las peticiones del cliente get, post, put y delete.
        this.app.use(cors_1.default()); // permite que angular le pueda pedir los datos al servidor.
        this.app.use(express_1.default.json()); // permite aceptar formatos json de aplicaciones clientes.
        this.app.use(express_1.default.urlencoded({ extended: false })); // permite enviar desde un formulario html.
    }
    rutas() {
        // va a configurar app, por eso es de tipo void.
        this.app.use('/', indexRutas_1.default); // utilizo el enrutador que exporte en el archivo indexRutas.ts
        this.app.use('/api/regiones', regionesRutas_1.default); // esta ruta solo estara disponible cuando el usuario ingrese a region
    }
    iniciar() {
        // a escuchar
        this.app.listen(this.app.get('port'), () => {
            // configuracion
            console.log('Servidor en puerto ', this.app.get('port')); // mensaje que se muestra por consola cuando todo se 
            //haya inicializado.
        });
    }
}
const servidor = new Servidor(); // Guardo dentro de una constante llamada servidor el objeto app que me devuelve 
// el metodo constructor de la clase servidor.
servidor.iniciar(); // ejecuto el metodo inicar de la clase servidor, para inicializar la aplicacion
