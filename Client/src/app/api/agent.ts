import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { IValue } from "../models/valueModel";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Connection error!");
  } else {
    const { status, data, config } = error.response;
    if (status === 404) {
      toast.error("Not found!");
    }
    if (
      status === 400 &&
      config.method === "get" &&
      Object.prototype.hasOwnProperty.call(data.errors, "id")
    ) {
      toast.error("Not found!");
    }
    if (status === 500) {
      toast.error("Server error!");
    }
  }
  throw error.response;
});

const requests = {
  get: <R>(url: string, config?: AxiosRequestConfig) =>
    axios.get<R>(url, config).then(responseBody),
  post: <R, B>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axios.post<R>(url, body, config).then(responseBody),
  put: <R, B>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axios.put<R>(url, body, config).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const ValueApi = {
  getValues: (): Promise<IValue[]> => requests.get<IValue[]>("/value"),
  getValue: (id: number): Promise<IValue> =>
    requests.get<IValue>(`/value/${id}`),
};

export default ValueApi;
