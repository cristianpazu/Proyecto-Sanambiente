import {Request, Response, response} from 'express';
import pool from '../../basedatos';


class RegionesControlador{

   
   public async listarRegiones (req:Request,res:Response) {
     const regiones= await pool.query('select * FROM regiones');
     if (regiones.length != 0) {
        res.status(200).json({
            regiones: regiones.rows
         });
     }
   }

   public async listarRegion (req:Request, res:Response): Promise<any>{
      const  {id_region}=req.params;
      const regiones=await pool.query('SELECT * FROM regiones where id_region=$1',[id_region]);
    /*console.log(regiones.length);
      if(regiones.length>0){
          return res.json(regiones[0]);
      }
      res.status(404).json({text: "La region no existe"});*/
      res.json(regiones.rows);
      res.json({message: 'Region encontrada'});
   }  

   public async crearRegion (req:Request,res:Response): Promise<void>{
  // pool.connect();
  // res.json(pool);
   await pool.query('INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)',
   [req.body.nombre_region,req.body.observacion_region]);
      res.json({message: 'Region creada correctamente'});    
   }

   public async actualizarRegion (req:Request,res:Response):Promise<void> {
      const  {id_region}= req.params;
      await pool.query('update regiones set nombre_region=$1, observacion_region=$2 where id_region =$3',
         [req.body.nombre_region,req.body.observacion_region,id_region]);
             res.json({text :'Region Actualizada'});    
   }  
}
export const regionesControlador= new RegionesControlador();
export default regionesControlador;