import { create } from 'zustand';

import { tokenStorage } from '@shared/lib/auth/token';

interface AuthState {
  isLoggedIn: boolean;
  actions: {
    login: (accessToken: string) => void;
    logout: () => void;
    syncFromStorage: () => void;
  };
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: Boolean(tokenStorage.get()),
  actions: {
    login: (accessToken) => {
      tokenStorage.set(accessToken);
      set({ isLoggedIn: true });
    },
    logout: () => {
      tokenStorage.clear();
      set({ isLoggedIn: false });
    },
    syncFromStorage: () => {
      const token = tokenStorage.get();
      set({ isLoggedIn: Boolean(token) });
    },
  },
}));
