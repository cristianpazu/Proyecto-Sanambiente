import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import citiesRoutes from './Components/Cities_Component/Cities_Route';
import regionsRoutes from './Components/Regions_Component/Regions_Route';
import ranksRoutes from './Components/Ranks_Component/Ranks_Route';

class Servidor {
    public app: Application;

    constructor() {
        this.app = express();
        this.configuracion();
        this.rutas();
    }
    configuracion(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    rutas(): void {
       // this.app.use('/', indexRutas);
        this.app.use('/api/city', citiesRoutes);
        this.app.use('/api/region', regionsRoutes);
        this.app.use('/api/rank', ranksRoutes);
    }

    iniciar(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}

const servidor = new Servidor();
servidor.iniciar();
