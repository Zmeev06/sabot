import { AxiosError } from 'axios';
import { ApiClient } from '../Client';

export const getRegion = async () => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: `/dict/region`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
