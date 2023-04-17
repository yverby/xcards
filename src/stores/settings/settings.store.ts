import { create } from 'zustand';
import { ColorScheme } from '@mantine/core';
import { persist } from 'zustand/middleware';

import { API, STORAGE } from '@src/constants';
import { useCardsStore } from '@src/stores/cards';

interface SettingsState {
  colorScheme: ColorScheme;
  locale: API.Locale | null;
}

interface SettingsActions {
  resetSettings: () => void;
  setSettings: (settings: Partial<SettingsState>) => void;
  toggleColorScheme: (colorScheme?: ColorScheme) => void;
}

const defaultState: Omit<SettingsState, 'colorScheme'> = {
  locale: null,
};

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      ...defaultState,
      colorScheme: 'dark',
      resetSettings() {
        set(() => ({ ...defaultState }));
      },
      setSettings(settings) {
        set(() => ({ ...settings }));
      },
      toggleColorScheme(colorScheme) {
        set((state) => ({
          colorScheme: colorScheme || (state.colorScheme === 'dark' ? 'light' : 'dark'),
        }));
      },
    }),
    {
      name: STORAGE.KEYS.SETTINGS,
    }
  )
);

useSettingsStore.subscribe((state, prevState) => {
  if (!state.locale && prevState.locale) {
    useCardsStore.getState().resetCards();
  }
});
