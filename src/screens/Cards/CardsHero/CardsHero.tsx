import { Title, Group, Stack, Center, Container, UnstyledButton } from '@mantine/core';

import { API } from '@src/constants';
import { useSettingsStore } from '@src/stores/settings';

import { useStyles } from './CardsHero.styles';

export function CardsHero() {
  const { classes } = useStyles();

  const setSettings = useSettingsStore((state) => state.setSettings);

  return (
    <Container size="xs" w="100%" h="100%">
      <Center h="inherit">
        <Stack p="xl" align="center" spacing="xl">
          <Title>XCards</Title>
          <Group position="center">
            {(Object.keys(API.LOCALE) as API.Locale[]).map((locale) => (
              <UnstyledButton
                key={locale}
                className={classes.action}
                onClick={() => setSettings({ locale })}
              >
                {API.LOCALE[locale].NAME}
              </UnstyledButton>
            ))}
          </Group>
        </Stack>
      </Center>
    </Container>
  );
}
