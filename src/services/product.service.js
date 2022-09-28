import axios from "axios";
import { get } from "lodash";
import { API_LOCAL_URL } from "config";
import { getHeaders } from "./common.service";

export const fetchProducts = async () => {
  const url = `${API_LOCAL_URL}/api/products`;
  const options = {
    url,
    method: "get",
    headers: getHeaders(),
  };
  const result = await axios(options);
  return get(result, "data", {});
};

export const fetchProductCates = async () => {
  const url = `${API_LOCAL_URL}/api/product-categories`;
  const options = {
    url,
    method: "get",
    headers: getHeaders(),
  };
  const result = await axios(options);
  return get(result, "data", {});
};
