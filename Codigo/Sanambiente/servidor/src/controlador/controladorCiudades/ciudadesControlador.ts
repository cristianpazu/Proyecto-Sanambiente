import { Request, Response, response } from 'express';
import pool from '../../basedatos';


class CiudadesControlador {

    public async listarCiudades(req: Request, res: Response) {
        const ciudades = await pool.query('select id_ciudad, nombre_ciudad, regiones.nombre_region' +
            ',observacion_ciudad FROM regiones, ciudades where regiones.id_region=ciudades.id_region;');
        if (ciudades.length != 0) {
            res.status(200).json({
                ciudades: ciudades.rows
            });
        }
    }
    public async listarCiudad(req: Request, res: Response): Promise<any> {
        const { id_ciudad } = req.params;
        const ciudad = await pool.query('SELECT id_ciudad, nombre_ciudad, regiones.nombre_region' +
            ',observacion_ciudad FROM regiones, ciudades where regiones.id_region=ciudades.id_region and id_ciudad=$1', [id_ciudad]);
        if (ciudad.length != 0) {
            res.status(200).json({
                ciudad: ciudad.rows
            });
        }
    }
    public async crearCiudad(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO ciudades (nombre_ciudad,id_region,observacion_ciudad) VALUES ($1,$2,$3)',
            [req.body.nombre_ciudad, req.body.id_region, req.body.observacion_ciudad]);
        res.json({ message: 'Ciudad creada correctamente' });
    }

    public async actualizarCiudad(req: Request, res: Response): Promise<void> {
        const { id_ciudad } = req.params;
        await pool.query('update ciudades set nombre_ciudad=$1,id_region=$2,observacion_ciudad=$3 where id_ciudad =$4',
            [req.body.nombre_ciudad, req.body.id_region, req.body.observacion_ciudad, id_ciudad]);
        res.json({ text: 'Ciudad Actualizada' });
    }
}
export const ciudadesControlador = new CiudadesControlador();
export default ciudadesControlador;