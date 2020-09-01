import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IValue } from "../models/valueModel";
import history from "./routerHistory";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (
  response: AxiosResponse
): ReturnType<typeof response.data> => response.data;

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
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: Record<string, unknown>) =>
    axios.post(url, body).then(responseBody),
  put: (url: string, body: Record<string, unknown>) =>
    axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const Value = {
  getValues: (): Promise<IValue[]> => requests.get("/value"),
  getValue: (id: number): Promise<IValue> => requests.get(`/value/${id}`),
};

export default Value;
