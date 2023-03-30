import { Stack } from '@mantine/core';

import { Cards } from '@src/screens';
import { useSettingsStore } from '@src/stores';

export function App() {
  const toggleColorScheme = useSettingsStore((state) => state.toggleColorScheme);

  return (
    <Stack
      h="100svh"
      spacing={0}
      align="center"
      sx={{ userSelect: 'none' }}
      onClick={() => toggleColorScheme()}
    >
      <Cards />
    </Stack>
  );
}
