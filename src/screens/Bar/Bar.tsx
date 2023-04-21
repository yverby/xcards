import { Box, Group, Container } from '@mantine/core';

import { BarHero } from './BarHero';
import { BarTheme } from './BarTheme';
import { BarProgress } from './BarProgress';

import { useStyles } from './Bar.styles';

export function Bar() {
  const { classes } = useStyles();

  return (
    <Container size="xs" w="100%" className={classes.root}>
      <Box component="header" className={classes.bar}>
        <BarProgress />
        <Group align="center" spacing="md">
          <BarHero />
          <BarTheme />
        </Group>
      </Box>
    </Container>
  );
}
