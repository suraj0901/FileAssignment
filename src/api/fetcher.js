import axios from "axios";
import { baseURL, categoryEndpoint, filesEndpoint } from "./urls";

const baseApi = axios.create({
  baseURL,
});

export const getFilesApi = async () => {
  const response = await baseApi.get(filesEndpoint);
  return response.data;
};

export const deleteFilesApi = async ({ id }) => {
  const response = await baseApi.delete(`${filesEndpoint}/${id}`);
  return response.data;
};

export const getCategoriesApi = async () => {
  const response = await baseApi.get(categoryEndpoint);
  return response.data;
};
