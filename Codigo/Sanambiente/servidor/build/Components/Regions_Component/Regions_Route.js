"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Regions_Service_1 = __importDefault(require("./Regions_Service"));
class RegionRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router.post('/createRegion', Regions_Service_1.default.create);
        this.router.get('/viewRegionById/:id_region', Regions_Service_1.default.viewById);
        this.router.get('/viewRegions', Regions_Service_1.default.viewR);
        this.router.put('/updateRegions/:id_region', Regions_Service_1.default.update);
        this.router.get('/viewRegion', Regions_Service_1.default.view);
    }
}
const regionRoutes = new RegionRoute();
exports.default = regionRoutes.router;
