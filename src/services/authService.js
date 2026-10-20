import { api } from "./api";

export const authService = {
    login: (payload) => api("/auth/login", { method: "POST", body: payload }),

    registerStudent: (payload) =>
        api("/auth/register-student", { method: "POST", body: payload }),

    registerAdmin: (payload) =>
        api("/auth/register-admin", { method: "POST", body: payload }),

    me: () => api("/auth/me"),
};