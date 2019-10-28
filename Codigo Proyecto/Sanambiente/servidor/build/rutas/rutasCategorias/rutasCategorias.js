"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasControlador_1 = __importDefault(require("../../controlador/controladorCategorias/categoriasControlador"));
// cambie el nombre de regionControlador a regionesControlador
class RegionesRutas {
    constructor() {
        this.router = express_1.Router();
        this.configuracion(); // A la propiedad router (que esta vacia hasta entonces), le agrega lo que esta en el metodo 
        // y despues ejecuta ese metodo configuracion.
    }
    configuracion() {
        this.router.get('/', categoriasControlador_1.default.listarCategorias); // La ruta inicial de la aplicacion, cuando visiten la ruta
        //inicial voy a listar TODAS las regiones
        this.router.get('/:id_categoria', categoriasControlador_1.default.listarCategoria);
        this.router.post('/', categoriasControlador_1.default.crearCategoria);
        // this.router.delete('/:id',sanambienteControlador.eliminar);
        this.router.put('/:id_categoria', categoriasControlador_1.default.actualizarCategoria);
    }
}
const categoriasRutas = new CategoriasRutas(); // Despues de que se instancia la clase IndexRutas, la guardo dentro de una constante 
// llamada indexRutas
exports.default = categoriasRutas.router; // Despues exporto esa instancia de clase; pero no todo, solo el enrutador "router"
// Nos vamos a index.ts y utilizo el enrutador "router" que acabo de crear.
