"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Ranks_Service_1 = __importDefault(require("./Ranks_Service"));
class RankRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    configuracion() {
        this.router.post('/createRank', Ranks_Service_1.default.create);
        this.router.get('/viewRankById/:id_rango', Ranks_Service_1.default.viewById);
        this.router.get('/viewRanks', Ranks_Service_1.default.view);
        this.router.put('/updateRanks/:id_rango', Ranks_Service_1.default.update);
        this.router.get('/viewStations', Ranks_Service_1.default.view);
    }
}
const ranksRoutes = new RankRoute();
exports.default = ranksRoutes.router;
