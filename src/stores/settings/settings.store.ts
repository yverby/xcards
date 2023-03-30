import { create } from 'zustand';
import { ColorScheme } from '@mantine/core';
import { persist } from 'zustand/middleware';

import { STORAGE } from '@src/constants';

interface SettingsState {
  colorScheme: ColorScheme;
}

interface SettingsActions {
  toggleColorScheme: (colorScheme?: ColorScheme) => void;
}

const defaultState: SettingsState = {
  colorScheme: 'dark',
};

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  persist(
    (set) => ({
      ...defaultState,
      toggleColorScheme(colorScheme) {
        set((state) => ({
          colorScheme: colorScheme || (state.colorScheme === 'dark' ? 'light' : 'dark'),
        }));
      },
    }),
    { name: STORAGE.KEYS.SETTINGS }
  )
);
