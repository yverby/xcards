import { Title, Group, Button, Container } from '@mantine/core';

import { API } from '@src/constants';
import { Paper } from '@src/components';
import { useSettingsStore } from '@src/stores/settings';

import { useStyles } from './CardsHero.styles';

export function CardsHero() {
  const { classes } = useStyles();

  const setSettings = useSettingsStore((state) => state.setSettings);

  return (
    <Container size="xs" w="100%" h="100%" className={classes.container}>
      <Paper w="100%">
        <Paper.Head>
          <Title size={32} align="center">
            XCards
          </Title>
        </Paper.Head>

        <Paper.Body pt={0}>
          <Group position="center" p="md" className={classes.locales}>
            {(Object.keys(API.LOCALE) as API.Locale[]).map((locale) => (
              <Button px="md" variant="action" onClick={() => setSettings({ locale })} key={locale}>
                {API.LOCALE[locale].NAME}
              </Button>
            ))}
          </Group>
        </Paper.Body>
      </Paper>
    </Container>
  );
}
