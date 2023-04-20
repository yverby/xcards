import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { STORAGE } from '@src/constants';
import { useCardsStore } from '@src/stores/cards';

import { SettingsState, SettingsActions } from './settings.types';

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
