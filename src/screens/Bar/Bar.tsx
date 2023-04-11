import { Box } from '@mantine/core';

import { BarActions } from './BarActions';
import { BarProgress } from './BarProgress';

import { useStyles } from './Bar.styles';

export function Bar() {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Box component="header" className={classes.bar}>
        <BarProgress />
        <BarActions />
      </Box>
    </Box>
  );
}
