import { ReactNode } from 'react';
import { Stack, Title, Divider, useMantineTheme } from '@mantine/core';

import { Paper } from '@src/components';

import { HeroAbout } from './HeroAbout';

interface HeroProps {
  children: ReactNode;
  showAbout?: boolean;
}

export function Hero({ children, showAbout }: HeroProps) {
  const theme = useMantineTheme();

  return (
    <Paper>
      <Paper.Header>
        <Title size={27} align="center">
          XCards
        </Title>
      </Paper.Header>
      <Paper.Section pt="xs">
        <Stack spacing="md">
          <HeroAbout opened={showAbout} />
          <Divider color={theme.other.colors.prism} />
          {children}
        </Stack>
      </Paper.Section>
    </Paper>
  );
}
