import { Group, Button, Container } from '@mantine/core';

import { API } from '@src/constants';
import { Hero } from '@src/screens/shared';
import { useSettingsStore } from '@src/stores/settings';

import { useStyles } from './CardsHero.styles';

export function CardsHero() {
  const { classes } = useStyles();

  const setSettings = useSettingsStore((state) => state.setSettings);

  return (
    <Container size="xs" w="100%" h="100%" className={classes.root}>
      <Hero>
        <Group spacing="sm" position="center">
          {(Object.keys(API.LOCALE) as API.Locale[]).map((locale) => (
            <Button
              key={locale}
              variant="secondary"
              w="calc(50% - 0.5rem)"
              onClick={() => setSettings({ locale })}
            >
              {API.LOCALE[locale].NAME}
            </Button>
          ))}
        </Group>
      </Hero>
    </Container>
  );
}
