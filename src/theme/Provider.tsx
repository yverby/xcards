import { ReactNode } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { ColorScheme, MantineProvider, ColorSchemeProvider } from '@mantine/core';

import { STORAGE } from '@src/constants';

import { configureTheme } from './config';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: STORAGE.KEYS.SCHEME,
    defaultValue: 'dark',
  });

  const toggleColorScheme = (scheme: ColorScheme) => {
    setColorScheme((prevScheme) => scheme ?? (prevScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={configureTheme({ colorScheme })}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
