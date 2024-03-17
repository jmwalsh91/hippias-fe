import { requests } from "../axios";

type loginData = {
  email: string;
  password: string;
};
export const Auth = {
  login: async (submission: loginData) =>
    await requests.post("/login", submission),
  register: async (submission: loginData) =>
    await requests.post("/register", submission),
  user: async () => await requests.get("/auth/user"),
  logout: async () => await requests.post("/logout", {}),
};
