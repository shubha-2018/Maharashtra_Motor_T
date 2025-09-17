// stores/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme: string) => set({ theme }),
      toggleTheme: () => {
        const currentTheme = get().theme;
        let newTheme = 'light';
        
        if (currentTheme === 'light') newTheme = 'dark';
        else if (currentTheme === 'dark') newTheme = 'high-contrast';
        else if (currentTheme === 'high-contrast') newTheme = 'light';
        
        set({ theme: newTheme });
      },
    }),
    {
      name: 'theme-storage', // name for the localStorage key
    }
  )
);