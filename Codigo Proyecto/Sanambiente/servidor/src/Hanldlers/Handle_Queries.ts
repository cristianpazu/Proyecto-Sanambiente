export const handlerQuery = {
    createCity: 'INSERT INTO ciudades (nombre_ciudad,id_region,observacion_ciudad) VALUES ($1,$2,$3)',
    viewCities: 'SELECT id_ciudad, nombre_ciudad, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region order by id_ciudad;',
    viewCity: 'SELECT id_ciudad, nombre_ciudad, regiones.id_region, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region and id_ciudad=$1',
    updateCity: 'UPDATE ciudades set nombre_ciudad=$1,id_region=$2,observacion_ciudad=$3 where id_ciudad =$4',
    viewRegionsCity: 'SELECT id_region, nombre_region FROM regiones order by id_region',

    createRegion: 'INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)',
    viewRegions: 'SELECT * FROM regiones order by id_region',
    viewRegion: 'SELECT * FROM regiones where id_region=$1',
    updateRegion: 'UPDATE regiones set nombre_region=$1,observacion_region=$2 where id_region=$3',

    createRank: 'INSERT INTO rangos (nombre_rango, valorMinimo, valorMaximo, id_estacion, observacion_rango) VALUES ($1,$2,$3,$4,$5)',
    viewRanks: 'SELECT * FROM rangos order by id_rango',
    viewRank: 'SELECT * FROM rangos where id_rango=$1',
    updateRank: 'UPDATE rangos set nombre_rango=$1, valorMinimo=$2, valorMaximo=$3, id_estacion=$4, observacion_region=$5 where id_rango=$6',
    viewStationsRank: 'SELECT id_estacion, nombre_estacion FROM estaciones order by id_estacion',
}