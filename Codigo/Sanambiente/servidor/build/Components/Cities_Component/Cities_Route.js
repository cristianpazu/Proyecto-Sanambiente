"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Cities_service_1 = __importDefault(require("./Cities_service"));
class CitiesRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router.post('/createCity', Cities_service_1.default.create);
        this.router.get('/viewCityById/:id_ciudad', Cities_service_1.default.viewById);
        this.router.get('/viewCities', Cities_service_1.default.view);
        this.router.put('/updateCities/:id_ciudad', Cities_service_1.default.update);
    }
}
const citiesRoutes = new CitiesRoute();
exports.default = citiesRoutes.router;
