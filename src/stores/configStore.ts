import { LANGUAGE_TYPES, THEME_TYPES } from 'src/types/constants';
import { create } from 'zustand';

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  // initial state
  theme: THEME_LIGHT,
  // method for manipulating the state
  toggleTheme: () =>
    set(state => ({
      theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
    })),
}));

const { DE, EN } = LANGUAGE_TYPES;

interface LanguageState {
  language: string;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>(set => ({
  // initial state
  language: DE,
  // method for manipulating the state
  toggleLanguage: () =>
    set(state => ({
      language: state.language === DE ? EN : DE,
    })),
}));
