import { rem, Box, Title } from '@mantine/core';

import { useCard } from './Card.context';
import { useStyles } from './CardHeader.styles';

export function CardHeader() {
  const card = useCard();
  const { classes } = useStyles();

  return (
    <Box component="header" className={classes.header}>
      <Title sx={{ fontSize: rem(32) }}>#{card.id}</Title>
    </Box>
  );
}
