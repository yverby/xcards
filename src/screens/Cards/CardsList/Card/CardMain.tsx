import { Box, Stack } from '@mantine/core';

import { useCard } from './Card.context';
import { useStyles } from './Card.styles';
import { cardParser } from './Card.parser';

export function CardMain() {
  const card = useCard();
  const { classes } = useStyles();

  const main = cardParser.getJSX(card.main);

  return (
    <Box component="section" className={classes.section}>
      <Stack>{main}</Stack>
    </Box>
  );
}
