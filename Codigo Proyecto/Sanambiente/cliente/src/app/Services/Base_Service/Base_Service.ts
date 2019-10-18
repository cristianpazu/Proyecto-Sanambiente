import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class BaseService {

    constructor(private httpClient: HttpClient) { }

    async create(body, route: string) {
        return this.httpClient.post(`${route}`, body).subscribe(async (responseServer: any) => {
            let message = await responseServer.message;
            if (message != 'Error') {
                return message;
            }
        })
    }

    view(route: string) {
        return this.httpClient.get(`${route}`);
    }

    async update(body, route: string) {
        return this.httpClient.put(`${route}`, body).subscribe(async (responseServer: any) => {
            let message = await responseServer.message;
            if (message != 'Error') {
                return message;
            }
        })
    }
}