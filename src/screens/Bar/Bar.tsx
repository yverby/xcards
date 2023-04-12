import { Box, Container } from '@mantine/core';

import { BarActions } from './BarActions';
import { BarProgress } from './BarProgress';

import { useStyles } from './Bar.styles';

export function Bar() {
  const { classes } = useStyles();

  return (
    <Container w="100%" size="xs" className={classes.container}>
      <Box component="header" className={classes.bar}>
        <BarProgress />
        <BarActions />
      </Box>
    </Container>
  );
}
