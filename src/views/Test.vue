<template>
  <div class="test">
    <h1>Test Page</h1>
    <button @click="fetchRandomCatImage">Get Random Cat</button>
    <div v-if="catImage" class="cat-container">
      <img :src="catImage.url" :alt="`Cat image ${catImage.id}`" :width="300" />
    </div>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import apiService from '../services/api.service.js';

export default {
  name: 'TestPage',
  data() {
    return {
      catImage: null, // Stores the fetched cat image data
      error: null,    // Stores error messages
    };
  },
  methods: {
    async fetchRandomCatImage() {
      try {
        this.error = null; // Reset error state
        this.catImage = await apiService.getRandomCatImage(); // Fetch random cat image
      } catch (err) {
        this.error = 'Failed to fetch a random cat image. Please try again later.';
      }
    },
  },
};
</script>

<style>
.test {
  text-align: center;
  padding: 2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

button:hover {
  background-color: #0056d2;
}

.cat-container {
  margin-top: 1rem;
}

.cat-container img {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.error {
  color: red;
  margin-top: 1rem;
  font-weight: bold;
}
</style>
