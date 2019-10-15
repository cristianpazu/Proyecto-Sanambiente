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
class RegionService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_region, observacion_region } = request.body;
                yield ConnectionDataBase.query(handlerQuery['createRegion'], [nombre_region, observacion_region]);
                return Promise.resolve(handleMessage(response, 200, 'Create Region'));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_region } = request.params;
                let { nombre_region, observacion_region } = request.body;
                yield ConnectionDataBase.query(handlerQuery['updateRegion'], [nombre_region, observacion_region, id_region]);
                return Promise.resolve(handleMessage(response, 200, 'Update Region'));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    view() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let regions = yield ConnectionDataBase.query(handlerQuery['viewRegionsCity']);
                return regions;
            }
            catch (error) {
                Promise.reject(404);
            }
        });
    }
    viewR(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let regions = yield ConnectionDataBase.query(handlerQuery['viewRegions']);
                return Promise.resolve(handleMessage(response, 200, regions.rows));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_region } = request.params;
                let region = yield ConnectionDataBase.query(handlerQuery.viewRegion, [id_region]);
                if (region.rows.length === 0) {
                    return Promise.resolve(handleMessage(response, 200, 'Region doesn´t exist'));
                }
                else {
                    return Promise.resolve(handleMessage(response, 200, region.rows));
                }
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
}
const regionService = new RegionService();
export default regionService;
