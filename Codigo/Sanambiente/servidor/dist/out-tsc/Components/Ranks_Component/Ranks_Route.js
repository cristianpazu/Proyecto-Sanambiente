import { Router } from 'express';
import RankService from './Ranks_Service';
class RankRoute {
    constructor() {
        this.router = Router();
        this.configuracion();
    }
    configuracion() {
        this.router.post('/createRank', RankService.create);
        this.router.get('/viewRankById/:id_region', RankService.viewById);
        this.router.get('/viewRanks', RankService.viewR);
        this.router.put('/updateRanks/:id_region', RankService.update);
        this.router.get('/viewStations', RankService.view);
    }
}
const ranksRoutes = new RankRoute();
export default ranksRoutes.router;
