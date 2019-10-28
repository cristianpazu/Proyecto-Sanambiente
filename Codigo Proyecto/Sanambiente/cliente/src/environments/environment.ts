/* Esta clase contiene las constantes que albergan las rutas del lado del servidor, para cada metodo 
  de las vistas*/

export const environment = {
  hostCreateCity: "http://localhost:3000/api/city/createCity",
  hostUpdateCity: "http://localhost:3000/api/city/updateCities",
  viewCities: "http://localhost:3000/api/city/viewCities",
  viewCityById: "http://localhost:3000/api/city/viewCityById",  
  viewRegion: "http://localhost:3000/api/region/viewRegion",

  hostCreateRegion: "http://localhost:3000/api/region/createRegion",
  hostUpdateRegion: "http://localhost:3000/api/region/updateRegions",
  viewRegions: "http://localhost:3000/api/region/viewRegions",
  hostviewRegionById: "http://localhost:3000/api/region/viewRegionById",

  hostCreateCategory: "http://localhost:3000/api/category/createCategory",
  hostUpdateCategory: "http://localhost:3000/api/category/updateCategories",
  viewCategories: "http://localhost:3000/api/category/viewCategories",
  hostviewCategoryById: "http://localhost:3000/api/category/viewCategoryById",

  production: false
};