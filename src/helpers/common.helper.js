import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
const ENTRY_POINTS = (window as any).ENTRY_POINTS;
const API_URL = ENTRY_POINTS.API_URL;

const getHeaders = () => {
  return {
    'content-type': 'application/json',
  };
};

export const fetchFilterOptions1 = async () => {
  const url = `${API_URL}/api/filter-options`;
  const options: AxiosRequestConfig = {
    url,
    method: 'get',
    headers: getHeaders(),
  };
  const result = await axios(options);
  return get(result, 'data.data', {});
};

export const fetchData = async () => {
  const url = `${API_URL}/api/search-data`;
  const options: AxiosRequestConfig = {
    url,
    method: 'get',
    headers: getHeaders(),
  };
  const result = await axios(options);
  let BM_DATA = get(result, 'data.data', []);
  return BM_DATA;
};

export const fetchFilterOptions = async () => {
  const url = `${API_URL}/api/filter-options`;
  const options: AxiosRequestConfig = {
    url,
    method: 'get',
    headers: getHeaders(),
  };
  const result = await axios(options);
  let FILTER_OPTIONS = get(result, 'data.data', {});
  return FILTER_OPTIONS;
};
