import axios from 'axios';

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY!;

export const axiosClient = axios.create({
  baseURL: 'http://192.168.3.125:1337/api',
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});