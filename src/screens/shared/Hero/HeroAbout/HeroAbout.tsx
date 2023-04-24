import { useMemo } from 'react';
import { Box, Text, Title, Stack, Anchor, Accordion } from '@mantine/core';

import { API } from '@src/constants';

const locale = Object.keys(API.LOCALE).length;

const links = Object.entries({
  author: {
    label: 'yverby',
    href: 'https://github.com/yverby/xcards',
  },
  library: {
    label: 'Mantine',
    href: 'https://github.com/mantinedev/mantine',
  },
  questions: {
    label: 'JavaScript Questions',
    href: 'https://github.com/lydiahallie/javascript-questions',
  },
});

export function HeroAbout() {
  const { author, library, questions } = useMemo(
    () =>
      links.reduce(
        (acc, [key, { label, href }]) => ({
          ...acc,
          [key]: <Anchor href={href}>{label}</Anchor>,
        }),
        {} as any
      ),
    []
  );

  return (
    <Accordion>
      <Accordion.Item value="about">
        <Accordion.Control>
          <Title order={6}>About</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack spacing="md">
            <Text>
              Javascript question cards. In order to change the card, you need to swipe the card to
              the <strong>left</strong> or <strong>right</strong>.
            </Text>
            <Text>
              Choose your preferred language from <strong>{locale}</strong> available...
            </Text>
            <Box sx={{ opacity: 0.75 }}>
              <Text size="xs">Based on {questions}</Text>
              <Text size="xs">
                Created by {author} with {library}
              </Text>
            </Box>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
