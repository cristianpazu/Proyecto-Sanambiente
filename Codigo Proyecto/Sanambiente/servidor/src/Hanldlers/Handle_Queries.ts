/* Esta clase contiene la constante en la cual se encuentran las sentencias SQL utilizadas para 
la interaccion con la base de datos, por parte de cada tabla parametro*/

export const handlerQuery = {
    // ciudad
    createCity: 'INSERT INTO ciudades (nombre_ciudad,id_region,observacion_ciudad) VALUES ($1,$2,$3)',
    viewCities: 'SELECT id_ciudad, nombre_ciudad, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region order by id_ciudad;',
    viewCity: 'SELECT id_ciudad, nombre_ciudad, regiones.id_region, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region and id_ciudad=$1',
    updateCity: 'UPDATE ciudades set nombre_ciudad=$1,id_region=$2,observacion_ciudad=$3 where id_ciudad =$4',
    viewRegionsCity: 'SELECT id_region, nombre_region FROM regiones order by id_region',
    // region
    createRegion: 'INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)',
    viewRegions: 'SELECT * FROM regiones order by id_region',
    viewRegion: 'SELECT * FROM regiones where id_region=$1',
    updateRegion: 'UPDATE regiones set nombre_region=$1,observacion_region=$2 where id_region=$3',
    // rango
    createRank: 'INSERT INTO rangos (nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango) VALUES ($1,$2,$3,$4,$5)',
    viewRanks: 'SELECT * FROM rangos order by id_rango',
    viewRank: 'SELECT * FROM rangos where id_rango=$1',
    updateRank: 'UPDATE rangos set nombre_rango=$1, valor_minimo=$2, valor_maximo=$3, id_estacion=$4, observacion_region=$5 where id_rango=$6',
    viewStationsRank: 'SELECT id_estacion, nombre_estacion FROM estaciones order by id_estacion',
    // categoria
    createCategory: 'INSERT INTO categorias (nombre_categoria, observacion_categoria) VALUES ($1,$2)',
    viewCategories: 'SELECT * FROM categorias order by id_categoria',
    viewCategory: 'SELECT * FROM categorias where id_categoria=$1',
    updateCategory: 'UPDATE categorias set nombre_categoria=$1, observacion_categoria=$2 where id_categoria=$3',
    // alerta
    createAlert: 'INSERT INTO alertas (nombre_alerta, observacion_alerta, tipo_alerta) VALUES ($1,$2,$3)',
    viewAlerts: 'SELECT * FROM alertas order by id_alerta',
    viewAlert: 'SELECT * FROM alertas where id_alerta=$1',
    updateAlert: 'UPDATE alertas set nombre_alerta=$1, observacion_alerta=$2, tipo_alerta=$3 where id_alerta=$4',
    // organizacion
    createOrganizacion: 'INSERT INTO organizaciones (nombre_organizacion, observacion_organizacion) VALUES ($1,$2)',
    viewOrganizations: 'SELECT * FROM organizaciones order by id_organizacion',
    viewOrganization: 'SELECT * FROM organizaciones where id_organizacion=$1',
    updateOrganizacion: 'UPDATE organizaciones set nombre_organizacion=$1,observacion_organizacion=$2 where id_organizacion=$3',
    // base tiempo
    createTime: 'INSERT INTO tiempos (nombre_tiempo, escala_tiempo, observacion_tiempo, alerta_tiempo) VALUES ($1,$2,$3,$4)',
    viewTimes: 'SELECT * FROM tiempos order by id_tiempo',
    viewTime: 'SELECT * FROM tiempos where id_tiempo=$1',
    updateTime: 'UPDATE tiempos set nombre_tiempo=$1, escala_tiempo=$2, observacion_tiempo=$3, alerta_tiempo=$4 where id_tiempo=$5',
    // estacion
    createStation: 'INSERT INTO estaciones (nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, gmt_estacion, protocolo_estacion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',
    viewStations: 'SELECT * FROM estaciones order by id_estacion;',
    viewStation: 'SELECT estaciones.id_estacion, nombre_estacion, serial_estacion, nombre_corto_estacion, categorias.id_categoria, tiempos.id_tiempo, observacion_estacion, regiones.id_region, ciudades.id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, gmt_estacion, protocolo_estacion, categorias.nombre_categoria, tiempos.nombre_tiempo, regiones.nombre_region, ciudades.nombre_ciudad FROM estaciones, regiones, ciudades, tiempos, categorias where regiones.id_region=ciudades.id_region and ciudades.id_ciudad=estaciones.id_ciudad and tiempos.id_tiempo=estaciones.id_tiempo and categorias.id_categoria=estaciones.id_categoria and estaciones.id_estacion=$1',
    updateStation: 'UPDATE estaciones set nombre_estacion=$1,serial_estacion=$2,nombre_corto_estacion=$3,id_categoria=$4,id_tiempo=$5,observacion_estacion=$6,id_ciudad=$7,latitud_estacion=$8,longitud_estacion=$9,elevacion_estacion=$10,gmt_estacion=$11,protocolo_estacion=$12 where id_estacion =$13',
    viewCategoriesStation: 'SELECT id_categoria, nombre_categoria FROM categorias order by id_categoria',
    viewTimesStation: 'SELECT id_tiempo, nombre_tiempo FROM tiempos order by id_tiempo',
    viewRegionsStation: 'SELECT id_region, nombre_region FROM regiones order by id_region',
    viewCitiesStation: 'SELECT id_ciudad, nombre_ciudad FROM ciudades order by id_ciudad',
}

