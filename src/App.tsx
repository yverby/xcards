import { Center, Stack } from '@mantine/core';

import { Bar, Cards } from '@src/screens';

export function App() {
  return (
    <Center h="100svh" sx={{ position: 'relative' }}>
      <Stack w="100%" h="100%" mah={900} py="md" spacing="md">
        <Bar />
        <Cards />
      </Stack>
    </Center>
  );
}
