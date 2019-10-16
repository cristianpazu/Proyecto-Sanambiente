"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Region_Service_1 = __importDefault(require("./Region_Service"));
class RegionRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router.post('/createRegion', Region_Service_1.default.create);
        this.router.get('/viewRegionById/:id_region', Region_Service_1.default.viewById);
        this.router.get('/viewRegions', Region_Service_1.default.viewR);
        this.router.put('/updateRegions/:id_region', Region_Service_1.default.update);
        this.router.get('/viewRegion', Region_Service_1.default.view);
    }
}
const regionRoutes = new RegionRoute();
exports.default = regionRoutes.router;
