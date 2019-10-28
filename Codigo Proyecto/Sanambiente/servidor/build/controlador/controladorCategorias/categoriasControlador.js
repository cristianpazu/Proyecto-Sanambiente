"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatos_1 = __importDefault(require("../../basedatos"));
class CategoriasControlador {
    listarCategorias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield basedatos_1.default.query('select * FROM categorias order by id_categoria');
            if (regiones.length != 0) {
                res.status(200).json({
                    regiones: regiones.rows
                });
            }
        });
    }
    listarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_categoria } = req.params;
            const region = yield basedatos_1.default.query('SELECT * FROM categorias where id_categoria=$1', [id_categoria]);
            if (categoria.length != 0) {
                res.status(200).json({
                    categoria: categoria.rows
                });
            }
        });
    }
    crearCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield basedatos_1.default.query('INSERT INTO regiones (nombre_categoria, observacion_categoria) VALUES ($1,$2)', [req.body.nombre_region, req.body.observacion_region]);
            res.json({ message: 'Categoria creada correctamente' });
        });
    }
    actualizarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_categoria } = req.params;
            yield basedatos_1.default.query('update regiones set nombre_categoria=$1, observacion_categoria=$2 where id_categoria =$3', [req.body.nombre_categoria, req.body.observacion_categoria, id_categoria]);
            res.json({ text: 'Region Actualizada' });
        });
    }
}
exports.categoriaControlador = new RegionesControlador();
exports.default = exports.categoriaControlador;