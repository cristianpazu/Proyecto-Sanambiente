/* Esta clase contiene las constantes que albergan las rutas del lado del servidor, para cada metodo 
  de las vistas*/

export const environment = {
  // ciudad
  hostCreateCity: "http://localhost:3000/api/city/createCity",
  hostUpdateCity: "http://localhost:3000/api/city/updateCities",
  viewCities: "http://localhost:3000/api/city/viewCities",
  viewCityById: "http://localhost:3000/api/city/viewCityById",  
  viewRegion: "http://localhost:3000/api/region/viewRegion",
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

  production: false
};