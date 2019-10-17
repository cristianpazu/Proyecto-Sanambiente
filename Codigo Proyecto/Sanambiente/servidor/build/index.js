"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const Cities_Route_1 = __importDefault(require("./Components/Cities_Component/Cities_Route"));
const Regions_Route_1 = __importDefault(require("./Components/Regions_Component/Regions_Route"));
const Ranks_Route_1 = __importDefault(require("./Components/Ranks_Component/Ranks_Route"));
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.rutas();
    }
    configuracion() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    rutas() {
        // this.app.use('/', indexRutas);
        this.app.use('/api/city', Cities_Route_1.default);
        this.app.use('/api/region', Regions_Route_1.default);
        this.app.use('/api/rank', Ranks_Route_1.default);
    }
    iniciar() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}
const servidor = new Servidor();
servidor.iniciar();
