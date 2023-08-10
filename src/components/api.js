import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Your Express server URL
});

export default instance;
