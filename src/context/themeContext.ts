import {create} from 'zustand';
import { devtools } from 'zustand/middleware';

export type ThemeT = 'light' | 'dark';

interface ThemeState {
    theme: ThemeT ;
    setTheme: (theme: ThemeT) => void;
}

const useThemeStore = create<ThemeState>()(
    devtools((set) => ({
        theme: 'light',
        setTheme: (theme) => {
            localStorage.setItem('theme', theme);
            document.body.setAttribute('data-theme', theme);
            set({ theme: theme });
        },
    }))
);

export default useThemeStore;