import { useMemo } from 'react';
import { Box, Title, Stack, Accordion } from '@mantine/core';

import { useCard } from './Card.context';
import { cardParser } from './Card.parser';
import { useStyles } from './CardDetails.styles';

export function CardDetails() {
  const card = useCard();
  const { classes } = useStyles();

  const details = useMemo(() => cardParser.getJSX(card.details), [card.details]);

  const title = useMemo(() => {
    const option = cardParser.getString(card.option);
    return option.slice(0, option.indexOf(':'));
  }, [card.option]);

  return (
    <Box component="section">
      <Accordion
        unstyled
        classNames={classes}
        transitionDuration={350}
        className={classes.accordion}
      >
        <Accordion.Item value="details">
          <Accordion.Control>
            <Title order={6}>{title}</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack spacing="md">{details}</Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
