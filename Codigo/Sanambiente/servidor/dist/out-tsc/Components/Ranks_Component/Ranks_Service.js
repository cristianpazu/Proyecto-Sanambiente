var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import handleMessage from '../../Hanldlers/Handle_Message';
class RankService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_rango, valorMinimo, valorMaximo, id_estacion, observacion_rango } = request.body;
                yield ConnectionDataBase.query(handlerQuery['createRank'], [nombre_rango, valorMinimo, valorMaximo, id_estacion, observacion_rango]);
                return Promise.resolve(handleMessage(response, 200, 'Create Rank'));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rango } = request.params;
                let { nombre_rango, valorMinimo, valorMaximo, id_estacion, observacion_rango } = request.body;
                yield ConnectionDataBase.query(handlerQuery['updateRank'], [nombre_rango, valorMinimo, valorMaximo, id_estacion, observacion_rango, id_rango]);
                return Promise.resolve(handleMessage(response, 200, 'Update Rank'));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stations = yield ConnectionDataBase.query(handlerQuery['viewStationsRank']);
                return Promise.resolve(handleMessage(response, 200, stations.rows));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    viewR(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let ranks = yield ConnectionDataBase.query(handlerQuery['viewRanks']);
                return Promise.resolve(handleMessage(response, 200, ranks.rows));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rango } = request.params;
                let rank = yield ConnectionDataBase.query(handlerQuery.viewRank, [id_rango]);
                if (rank.rows.length === 0) {
                    return Promise.resolve(handleMessage(response, 200, 'Rank doesn´t exist'));
                }
                else {
                    return Promise.resolve(handleMessage(response, 200, rank.rows));
                }
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
}
const rankService = new RankService();
export default rankService;
