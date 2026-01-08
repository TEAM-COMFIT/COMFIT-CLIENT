import { create } from 'zustand';

import { tokenStorage } from '@/shared/lib/auth/token-storage';

interface AuthState {
  isLoggedIn: boolean;
  actions: {
    login: (accessToken: string) => void;
    logout: () => void;
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
  },
}));
