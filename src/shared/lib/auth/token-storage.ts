const ACCESS_TOKEN_KEY = "accessToken";

export const tokenStorage = {
  get() {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  },
  set(token: string) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  clear() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  },
};
