import { Box } from '@mantine/core';

import { useCard } from './Card.context';
import { useStyles } from './Card.styles';
import { cardParser } from './Card.parser';

export function CardTitle() {
  const card = useCard();
  const { classes } = useStyles();

  const title = cardParser.getJSX(card.title);

  return (
    <Box component="section" className={classes.section}>
      {title}
    </Box>
  );
}
