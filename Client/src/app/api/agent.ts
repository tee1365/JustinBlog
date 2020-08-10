import axios, { AxiosResponse } from "axios";
import { IValue } from "../models/valueModel";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (
  response: AxiosResponse
): ReturnType<typeof response.data> => response.data;

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
