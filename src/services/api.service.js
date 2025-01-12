// src/services/api.service.js
import axios from 'axios';
import Config from '../config.js';

class ApiService {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  /**
   * Fetch a random cat image from the API.
   * @returns {Promise<Object>} The cat image data.
   */
  async getRandomCatImage() {
    try {
      const response = await this.api.get('/images/search');
      if (response.data && response.data.length > 0) {
        return response.data[0]; // Return the first image in the array
      }
      throw new Error('No cat images found.');
    } catch (error) {
      console.error('Error fetching random cat image:', error.message);
      throw error;
    }
  }
}

const apiService = new ApiService(Config.API_BASE_URL);
export default apiService;
