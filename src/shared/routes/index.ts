import { Dictionary } from "lodash"

/**
 * @param path - Путь
 * @param label - Лейбл для отображения в меню
 */

export interface RouteType {
  path: string
  label: string
}

/**
 * Объект, содержащий роутинг приложения.
 */
export const Routes: Dictionary<RouteType> = {
  login: {
    path: "/",
    label: "Войти",
  },
  register: {
    path: "/register",
    label: "Зарегистрироваться",
  },
}
