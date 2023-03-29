import { Stack, useMantineColorScheme } from '@mantine/core';

import { Cards, Header } from '@src/screens';

export function App() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Stack h="100svh" spacing={0} align="center" onClick={() => toggleColorScheme()}>
      <Header />
      <Cards />
    </Stack>
  );
}
