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
const Handle_Queries_1 = require("../../Hanldlers/Handle_Queries");
const Handle_Message_1 = __importDefault(require("../../Hanldlers/Handle_Message"));
class CategoryService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_categoria, observacion_categoria } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createCategory'], [nombre_categoria, observacion_categoria]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create category'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error Crear conexion'));
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_categoria } = request.params;
                let { nombre_categoria, observacion_categoria } = request.body;
                console.log(id_categoria, '\n', request.body);
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateCategory'], [nombre_categoria, observacion_categoria, id_categoria]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update category'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    view(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let categories = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewCategories']);
                return Promise.resolve(Handle_Message_1.default(response, 200, categories.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_categoria } = request.params;
                let category = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewCategory, [id_categoria]);
                console.log(category.rows);
                if (category.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'City doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, category.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
const categoryService = new CategoryService();
exports.default = categoryService;
