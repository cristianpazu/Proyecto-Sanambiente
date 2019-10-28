"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatos_1 = __importDefault(require("../../basedatos"));
class CategoriaControlador {
    listarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield basedatos_1.default.query('select * from categorias');
            res.json(categorias);
        });
    }
    listarUnaCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const categoria = yield basedatos_1.default.query('SELECT * FROM categorias where id_categoria=$1', [id]);
            /* console.log(region.length);
             if(region.length>0){
                 return res.json(region[0]);
             }
             res.status(404).json({text: "La region no existe"});*/
            res.json(categoria);
            res.json({ message: 'Region encontrada' });
        });
    }
    crearCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // pool.connect();
            // res.json(pool);
            yield basedatos_1.default.query('INSERT INTO categorias (nombre_categoria, observacion_categoria) VALUES ($1,$2)', [req.body.nombre_categoria, req.body.observacion_categoria]);
            res.json({ message: 'Region creada correctamente' });
        });
    }
    /* public eliminar (req:Request,res:Response) {
        res.json({text :'Eliminando Region '+ req.params.id});
     }*/
    actualizarCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield basedatos_1.default.query('update categorias set nombre_categoria=$1, observacion_categoria=$2 where id_categoria =$3', [req.body.nombre_region, req.body.observacion_region, id]);
            res.json({ text: 'Categoria Actualizada' });
        });
    }
}
exports.categoriaControlador = new CategoriaControlador();
exports.default = exports.categoriaControlador;
