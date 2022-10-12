import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;