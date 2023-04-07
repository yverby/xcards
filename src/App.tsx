import { Center, Stack } from '@mantine/core';

import { Cards } from '@src/screens';

export function App() {
  return (
    <Center h="100svh">
      <Stack w="100%" h="100%" mah={900} py="lg" spacing="lg">
        <Cards />
      </Stack>
    </Center>
  );
}
