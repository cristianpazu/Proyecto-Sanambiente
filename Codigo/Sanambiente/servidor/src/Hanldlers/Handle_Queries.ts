export const handlerQuery = {
    createCity: 'INSERT INTO ciudades (nombre_ciudad,id_region,observacion_ciudad) VALUES ($1,$2,$3)',
    viewCities:'select id_ciudad, nombre_ciudad, observacion_ciudad ' + ',regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region order by id_ciudad;',
    viewCity: 'SELECT id_ciudad, nombre_ciudad, regiones.id_region, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region and id_ciudad=$1',
    updateCity: 'update ciudades set nombre_ciudad=$1,id_region=$2,observacion_ciudad=$3 where id_ciudad =$4',
    viewRegionsCity: 'select id_region, nombre_region FROM regiones order by id_region',
    
    createRegion: 'INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)',
    viewRegions: 'select * FROM regiones order by id_region',
    viewRegion:'SELECT * FROM regiones where id_region=$1',
    updateRegion: 'update regiones set nombre_region=$1,observacion_region=$2 where id_region=$3',
}