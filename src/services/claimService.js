import { api } from "./api";

export const claimService = {
  mine: async () => (await api("/claims/my-claims")).claims,

  create: (body) => api("/claims", { method: "POST", body }),
};