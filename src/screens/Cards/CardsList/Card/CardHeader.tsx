import { Box, Title } from '@mantine/core';

import { useCard } from './Card.context';
import { useStyles } from './Card.styles';

export function CardHeader() {
  const card = useCard();
  const { classes } = useStyles();

  return (
    <Box component="header" className={classes.header}>
      <Title order={2}>#{card.id}</Title>
    </Box>
  );
}
