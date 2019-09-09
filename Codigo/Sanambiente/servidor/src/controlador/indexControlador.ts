 import {Request, Response} from 'express';

class IndexControlador{
   public index (req:Request,res:Response) {
    res.json({text:'Estas en /api/home'});    
   } 
}

export const indexControlador= new IndexControlador();