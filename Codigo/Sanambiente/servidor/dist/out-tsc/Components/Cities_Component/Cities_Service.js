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
class CityService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_ciudad, id_region, observacion_ciudad } = request.body;
                yield ConnectionDataBase.query(handlerQuery['createCity'], [nombre_ciudad, id_region, observacion_ciudad]);
                return Promise.resolve(handleMessage(response, 200, 'Create city'));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_ciudad } = request.params;
                let { nombre_ciudad, id_region, observacion_ciudad } = request.body;
                yield ConnectionDataBase.query(handlerQuery['updateCity'], [nombre_ciudad, id_region, observacion_ciudad, id_ciudad]);
                return Promise.resolve(handleMessage(response, 200, 'Update city'));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    view(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let cities = yield ConnectionDataBase.query(handlerQuery['viewCities']);
                return Promise.resolve(handleMessage(response, 200, cities.rows));
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_ciudad } = request.params;
                let city = yield ConnectionDataBase.query(handlerQuery.viewCity, [id_ciudad]);
                if (city.rows.length === 0) {
                    return Promise.resolve(handleMessage(response, 200, 'City doesn´t exist'));
                }
                else {
                    return Promise.resolve(handleMessage(response, 200, city.rows));
                }
            }
            catch (error) {
                Promise.reject(handleMessage(response, 404, 'Error'));
            }
        });
    }
}
const cityService = new CityService();
export default cityService;
