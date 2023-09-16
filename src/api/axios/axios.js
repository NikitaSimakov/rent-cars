import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://65041e12c8869921ae2485eb.mockapi.io/api/',
});
