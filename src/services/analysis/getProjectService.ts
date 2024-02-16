import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const getProject = async (id: string) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `/project/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    });
    const { data, status } = response;
    if (status === 200) {
      localStorage.setItem('authToken', data.access_token)
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
