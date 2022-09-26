import axios, { AxiosRequestConfig } from "axios";
import { get } from "lodash";
import { API_URL } from "config";
import { getHeaders } from "./common.service";

export const fetchProducts = async () => {
  const url = `${API_URL}/api/products`;
  const options = {
    url,
    method: "get",
    headers: getHeaders(),
  };
  const result = await axios(options);
  return get(result, "data", {});
};
