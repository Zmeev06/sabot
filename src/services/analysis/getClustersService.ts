import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const getClusters = async (core: number, parentId?: number, sort: string = 'id', order: string = 'desc', ) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `/cluster/${core}?sort=${sort}&order=${order}${parentId ? `&parent_id=${parentId}` : ''}`,
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
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
