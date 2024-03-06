import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const requests = {
  get: async <T>(url: string, config?: AxiosRequestConfig) =>
    api.get<T>(url, config).then(responseBody),
  post: async <T, B>(url: string, body: B, params?: AxiosRequestConfig) =>
    api.post<T>(url, body, params).then(responseBody),
  put: async <T, B>(url: string, body: B, config?: AxiosRequestConfig) =>
    api.put<T>(url, body, config).then(responseBody),
  delete: async <T>(url: string, config?: AxiosRequestConfig) =>
    api.delete<T>(url, config).then(responseBody),
};
api.interceptors.response.use(
  async (response) => {
    if (typeof response.data === 'string') {
      try {
        const decodedString = atob(response.data);

        response.data = JSON.parse(decodedString);
      } catch (error) {
        console.error("Error decoding", error);
      }
    }
    
    console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
