import { Request, Response } from 'express';

export default interface BaseService <T> {
    create(request: Request, response: Response): Promise<T>;

    update(request: Request, response: Response): Promise<T>;

    view(request: Request, response: Response): Promise<T>;

    viewById(request: Request, response: Response): Promise<T>;
} 