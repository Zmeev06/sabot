import { AxiosError } from "axios";
import { ApiClient } from "../Client";
export const getCarData = async (login: string, password: string) => {
  const loginData = {
    email: login,
    password
  }
  try {
    const response = await ApiClient({
      method: "POST",
      url: `/login`,
      data: loginData
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
