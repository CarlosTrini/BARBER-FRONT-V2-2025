import axios, {AxiosInstance as AxiosInstanceType} from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

// instancia de axios
export const API: AxiosInstanceType = axios.create({
          baseURL: BASE_URL,
          timeout: 120000,
          headers: {
                    'Content-Type': 'application/json',
          },
});