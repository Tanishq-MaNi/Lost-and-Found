import { api } from "./api";

export const userService = {
  matches: async () => (await api("/users/matches")).matches,
};