import axios from "axios";
import { baseURL, categoryEndpoint, filesEndpoint } from "./urls";

const baseApi = axios.create({
  baseURL,
});

export const getFilesApi = async () => {
  const response = await baseApi.get(filesEndpoint);
  return response.data;
};

export const postFileApi = async ({ body }) => {
  const response = await baseApi.post(filesEndpoint, body);
  return response.data;
};

export const updateFilesApi = async ({ body }) => {
  const response = await baseApi.put(`${filesEndpoint}/${body.id}`, body);
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
