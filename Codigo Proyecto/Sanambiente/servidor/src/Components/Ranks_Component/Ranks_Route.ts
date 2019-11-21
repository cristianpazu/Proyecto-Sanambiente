import { Router } from 'express';
import RankService from './Ranks_Service';

class RankRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    configuracion(): void {
        this.router.post('/createRank', RankService.create);
        this.router.get('/viewRankById/:id_rango', RankService.viewById);
        this.router.get('/viewRanks', RankService.view);
        this.router.put('/updateRanks/:id_rango', RankService.update);
        this.router.get('/viewStations', RankService.view)
    }
}

const ranksRoutes = new RankRoute();
export default ranksRoutes.router; 