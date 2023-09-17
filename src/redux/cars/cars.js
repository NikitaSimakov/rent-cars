import { instance } from 'api/axios/axios';

export const getCars = async (page, limit = 8) => {
  const response = await instance.get(`cars?p=${page}&limit=${limit}`);
  return response;
};
