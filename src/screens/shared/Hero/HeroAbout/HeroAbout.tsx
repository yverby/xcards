import { Code, Text, Title, Stack, Anchor, Accordion } from '@mantine/core';

import { API } from '@src/constants';

import { useStyles } from './HeroAbout.styles';

const locale = Object.keys(API.LOCALE).length;

const { author, library, questions } = Object.entries({
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
}).reduce(
  (acc, [key, { label, href }]) => ({
    ...acc,
    [key]: <Anchor href={href}>{label}</Anchor>,
  }),
  {} as any
);

interface HeroAboutProps {
  opened?: boolean;
}

export function HeroAbout({ opened }: HeroAboutProps) {
  const { classes } = useStyles();

  return (
    <Accordion classNames={classes} {...(opened && { defaultValue: 'about' })}>
      <Accordion.Item value="about">
        <Accordion.Control>
          <Title order={6}>About</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack spacing="md">
            <Text>
              <Code>JavaScript</Code> question cards. Just <Code>swipe</Code> cards{' '}
              <Code>left</Code> or <Code>right</Code> and choose options.
            </Text>
            <Text>
              <Code>{locale}</Code> translations available.
            </Text>
            <Text size="xs" sx={{ opacity: 0.75 }}>
              Based on {questions}. Built by {author} using {library}.
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
