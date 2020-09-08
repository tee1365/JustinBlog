import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import { IValue } from "../models/valueModel";
import history from "./routerHistory";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Connection error!");
  } else {
    const { status, data, config } = error.response;
    if (status === 404) {
      history.push("/notfound");
    }
    if (
      status === 400 &&
      config.method === "get" &&
      Object.prototype.hasOwnProperty.call(data.errors, "id")
    ) {
      history.push("/notfound");
    }
    if (status === 500) {
      toast.error("Server error!");
    }
  }
  throw error.response;
});

const requests = {
  get: (url: string, config?: AxiosRequestConfig) =>
    axios.get(url, config).then(responseBody),
  post: <R, B>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axios.post(url, body, config).then<R>(responseBody),
  put: <R, B>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axios.put(url, body, config).then<R>(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Value = {
  getValues: (): Promise<IValue[]> => requests.get("/value"),
  getValue: (id: number): Promise<IValue> => requests.get(`/value/${id}`),
};

export default Value;
