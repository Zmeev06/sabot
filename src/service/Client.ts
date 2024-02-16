import axios, { AxiosRequestConfig, ResponseType } from "axios";
import dotenv from 'dotenv'

dotenv.config()

const API_BASE_URL = process.env.BASE_URL!;

if (!API_BASE_URL) {
  throw new Error('BASE_URL is not defined in the environment variables!');
}

interface Client {
  data?: unknown | undefined;
  method?: string | undefined;
  url: string | undefined;
  params?: string | undefined;
  body?: unknown | undefined;
  headers?:
    | {
        [key: string]: string;
      }
    | undefined;
  responseType?: ResponseType;
}

const REQUEST_TIMEOUT = 5000;

const API = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
});

export const ApiClient = async ({
  data,
  method = "GET",
  url,
  params,
  headers,
  responseType = "json",
}: Client) => {
  const requestParams: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    responseType,
  };

  API.defaults.headers = { ...API.defaults.headers, ...headers };

  return API(requestParams)
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => {
      console.error(
        "\nERROR MESSAGE:",
        err.response.data.message,
        `\nSTATUS: ${err.response.data.status}`,
      );

      return { data: "isError", status: err.response.status };
    });
};
