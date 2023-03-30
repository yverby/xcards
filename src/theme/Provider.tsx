import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';

import { useSettingsStore } from '@src/stores';

import { configureTheme } from './config';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useSettingsStore((state) => state.colorScheme);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={configureTheme({ colorScheme })}>
      {children}
    </MantineProvider>
  );
}
