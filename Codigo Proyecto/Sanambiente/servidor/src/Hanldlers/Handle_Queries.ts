/* Esta clase contiene la constante en la cual se encuentran las sentencias SQL utilizadas para 
la interaccion con la base de datos, por parte de cada tabla parametro*/

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

    createCategory: 'INSERT INTO categorias (nombre_categoria, observacion_categoria) VALUES ($1,$2)',
    viewCategories: 'SELECT * FROM categorias order by id_categoria',
    viewCategory: 'SELECT * FROM categorias where id_categoria=$1',
    updateCategory: 'UPDATE categorias set nombre_categoria=$1, observacion_categoria=$2 where id_categoria=$3',

    createAlert: 'INSERT INTO alertas (nombre_alerta, observacion_alerta, tipo_alerta) VALUES ($1,$2,$3)',
    viewAlerts: 'SELECT * FROM alertas order by id_alerta',
    viewAlert: 'SELECT * FROM alertas where id_alerta=$1',
    updateAlert: 'UPDATE alertas set nombre_alerta=$1, observacion_alerta=$2, tipo_alerta=$3 where id_alerta=$4',

    createOrganizacion: 'INSERT INTO organizaciones (nombre_organizacion, observacion_organizacion) VALUES ($1,$2)',
    viewOrganizations: 'SELECT * FROM organizaciones order by id_organizacion',
    viewOrganization: 'SELECT * FROM organizaciones where id_organizacion=$1',
    updateOrganizacion: 'UPDATE organizaciones set nombre_organizacion=$1,observacion_organizacion=$2 where id_organizacion=$3',
}