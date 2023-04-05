import { Box, Title } from '@mantine/core';

import { useCard } from './Card.context';
import { useStyles } from './Card.styles';
import { cardParser } from './Card.parser';

export function CardHeader() {
  const card = useCard();
  const { classes } = useStyles();

  const id = parseInt(cardParser.getString(card.title), 10);

  return (
    <Box component="header" className={classes.header}>
      <Title>#{id}</Title>
    </Box>
  );
}
