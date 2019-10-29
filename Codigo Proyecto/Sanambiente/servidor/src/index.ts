// Clase que contiene los metodos de configuracion inical y las rutas.

// Se importan los componentes requeridos para crear esta clase.
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import citiesRoutes from './Components/Cities_Component/Cities_Route';
import regionsRoutes from './Components/Regions_Component/Regions_Route';
import categoriesRutes from './Components/Categories_Component/Categories_Rute';
import ranksRoutes from './Components/Ranks_Component/Ranks_Route';
import organizationsRoutes from './Components/Organizations_Component/Organizations_Route';

// Clase Servidor cuyos metodos se utilizaran más a adelante
class Servidor {
    public app: Application;

    // Constructor en el cual se instancian los metodos a ejecutar
    constructor() {
        this.app = express();
        this.configuracion();
        this.rutas();
    }

    //Metodo en el cual se establecen los parametros logicos que necesita el servidor
    configuracion(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    //Metodo en el cual se establecen las rutas iniciales del lado del servidor de cada tabla parametro
    rutas(): void {
        this.app.use('/api/city', citiesRoutes);
        this.app.use('/api/region', regionsRoutes);
        this.app.use('/api/category', categoriesRutes);
        this.app.use('/api/rank', ranksRoutes);
        this.app.use('/api/organization', organizationsRoutes);
    }

    // Metodo que identifica el puerto usado para la conexion en el servidor
    iniciar(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}
/* Se crea una constante de tipo Servidor, la cual almacenara los metodos contenidos de esta clase y los
cuales seran utilizados por otras clases.*/
const servidor = new Servidor();

// Se ejecuta el servidor
servidor.iniciar();
