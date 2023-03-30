import { Stack } from '@mantine/core';

import { Cards, Header } from '@src/screens';
import { useSettingsStore } from '@src/stores';

export function App() {
  const toggleColorScheme = useSettingsStore((state) => state.toggleColorScheme);

  return (
    <Stack h="100svh" spacing={0} align="center" onClick={() => toggleColorScheme()}>
      <Header />
      <Cards />
    </Stack>
  );
}
