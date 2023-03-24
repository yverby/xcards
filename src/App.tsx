import { Center, useMantineColorScheme } from '@mantine/core';

import { CardStack } from '@src/screens';

export function App() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Center h="100svh" onClick={() => toggleColorScheme()}>
      <CardStack />
    </Center>
  );
}
