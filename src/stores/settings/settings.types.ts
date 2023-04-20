import { ColorScheme } from '@mantine/core';

import { API } from '@src/constants';

export interface SettingsState {
  colorScheme: ColorScheme;
  locale: API.Locale | null;
}

export interface SettingsActions {
  resetSettings: () => void;
  setSettings: (settings: Partial<SettingsState>) => void;
  toggleColorScheme: (colorScheme?: ColorScheme) => void;
}
