import { instance } from 'api/axios/axios';

export const getCars = async page => {
  const response = await instance.get(`cars?p=${page}&limit=8`);
  return response;
};
