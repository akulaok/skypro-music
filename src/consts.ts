const filters = ["исполнителю", "жанру", "году выпуска"];
export default filters;

export enum APIRoute {
  GetTracks = '/catalog/track/all/',
  Login = '/user/signup/',
  Logout = '/user/login/',
  GetToken = '/user/token/',
  RefreshToken = '/user/token/refresh/',
  GetTracksById = '/catalog/track/<id>/',
  Favorite = '/catalog/track/favorite/all/',
  CreateCatalog = '/catalog/selection',
  GetCatalogs = '/catalog/selection/all',
  
}