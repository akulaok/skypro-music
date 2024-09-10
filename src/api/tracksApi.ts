import { APIRoute } from '@/consts';
import Loader from './loader';

export default class TracksApi {
  async getTracks() {
    const loader = new Loader(''); 
    const response = loader.get();
    console.log(response);
    return response;
  }
}