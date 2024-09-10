import axios from 'axios';

export default class Loader {
  baseUrl = 'https://webdev-music-003b5b991590.herokuapp.com/catalog/track/all/';

  constructor(address: string) {
    this.baseUrl = `${this.baseUrl}${address}`;
  }

  async get() {
    try {
      const response = await axios.get(this.baseUrl, {});
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
}
