/* Esta clase contiene las constantes que albergan las rutas del lado del servidor, para cada metodo de las vistas*/

export const environment = {
  // ciudad
  hostCreateCity: "http://localhost:3000/api/city/createCity",
  hostUpdateCity: "http://localhost:3000/api/city/updateCities",
  viewCities: "http://localhost:3000/api/city/viewCities",
  viewCityById: "http://localhost:3000/api/city/viewCityById",
  viewRegionsCity: "http://localhost:3000/api/region/viewRegionsCity",
  // region
  hostCreateRegion: "http://localhost:3000/api/region/createRegion",
  hostUpdateRegion: "http://localhost:3000/api/region/updateRegions",
  viewRegions: "http://localhost:3000/api/region/viewRegions",
  hostviewRegionById: "http://localhost:3000/api/region/viewRegionById",
  // organizacion
  hostCreateOrganization: "http://localhost:3000/api/organization/createOrganization",
  hostUpdateOrganization: "http://localhost:3000/api/organization/updateOrganizations",
  viewOrganizations: "http://localhost:3000/api/organization/viewOrganizations",
  hostviewOrganizationById: "http://localhost:3000/api/organization/viewOrganizationById",
  // categorias
  hostCreateCategory: "http://localhost:3000/api/category/createCategory",
  hostUpdateCategory: "http://localhost:3000/api/category/updateCategories",
  viewCategories: "http://localhost:3000/api/category/viewCategories",
  hostviewCategoryById: "http://localhost:3000/api/category/viewCategoryById",
  // Alertas
  hostCreateAlert: "http://localhost:3000/api/alert/createAlert",
  hostUpdateAlert: "http://localhost:3000/api/alert/updateAlerts",
  viewAlerts: "http://localhost:3000/api/alert/viewAlerts",
  hostviewAlertById: "http://localhost:3000/api/alert/viewAlertById",
  // Base de tiempo 
  hostCreateTime: "http://localhost:3000/api/time/createTime",
  hostUpdateTime: "http://localhost:3000/api/time/updateTimes",
  viewTimes: "http://localhost:3000/api/time/viewTimes",
  hostviewTimeById: "http://localhost:3000/api/time/viewTimeById",
  viewAlertsTime: "http://localhost:3000/api/alert/viewAlertsTime",
  // Estaciones
  hostCreateStation: "http://localhost:3000/api/station/createStation",
  hostUpdateStation: "http://localhost:3000/api/station/updateStations",
  viewStations: "http://localhost:3000/api/station/viewStations",
  viewStationById: "http://localhost:3000/api/station/viewStationById",
  viewCategoryStation: "http://localhost:3000/api/category/viewCategoriesStation",
  viewTimeStation: "http://localhost:3000/api/time/viewTimesStation",
  viewRegionStation: "http://localhost:3000/api/region/viewRegionsStation",
  viewCityStation: "http://localhost:3000/api/city/viewCitiesStation",
  viewGmtStation: "http://localhost:3000/api/gmt/viewGmtStation",
  // rango
  hostCreateRank: "http://localhost:3000/api/rank/createRank",
  hostUpdateRank: "http://localhost:3000/api/rank/updateRanks",
  viewRanks: "http://localhost:3000/api/rank/viewRanks",
  viewRankById: "http://localhost:3000/api/rank/viewRankById",
  viewStationsRank: "http://localhost:3000/api/station/viewStationsRank",
  // gmt
  hostCreateGmt: "http://localhost:3000/api/gmt/createGmt",
  hostUpdateGmt: "http://localhost:3000/api/gmt/updateGmt",
  viewGmt: "http://localhost:3000/api/gmt/viewGmt",
  viewGmtById: "http://localhost:3000/api/gmt/viewGmtById",
  // mantenimiento
  hostCreateMaintenance: "http://localhost:3000/api/maintenance/createMaintenance",
  hostUpdateMaintenance: "http://localhost:3000/api/maintenance/updateMaintenances",
  viewMaintenances: "http://localhost:3000/api/maintenance/viewMaintenances",
  viewMaintenanceById: "http://localhost:3000/api/maintenance/viewMaintenanceById",
  viewStationsMaintenance: "http://localhost:3000/api/station/viewStationsMaintenance",
  // tipo mantenimiento
  hostCreateMaintenanceType: "http://localhost:3000/api/maintenance_type/createMaintenanceType",
  hostUpdateMaintenanceType: "http://localhost:3000/api/maintenance_type/updateMaintenancesType",
  viewMaintenancesType: "http://localhost:3000/api/maintenance_type/viewMaintenancesType",
  viewMaintenanceTypeById: "http://localhost:3000/api/maintenance_type/viewMaintenanceTypeById",
   // periodicidad
   hostCreatePeriodicity: "http://localhost:3000/api/periodicity/createPeriodicity",
   hostUpdatePeriodicity: "http://localhost:3000/api/periodicity/updatePeriodicity",
   viewPeriodicities: "http://localhost:3000/api/periodicity/viewPeriodicities",
   viewPeriodicityById: "http://localhost:3000/api/periodicity/viewPeriodicityById",
  
  production: false
};