import { Box, UnstyledButton } from '@mantine/core';
import { IconReload, IconBrightnessUp, IconBrightnessDown } from '@tabler/icons-react';

import { select, shallow } from '@src/lib/store';
import { useSettingsStore } from '@src/stores/settings';

import { useStyles } from './BarActions.styles';

export function BarActions() {
  const { classes } = useStyles();

  const { colorScheme, resetSettings, toggleColorScheme } = useSettingsStore(
    select(['colorScheme', 'resetSettings', 'toggleColorScheme']),
    shallow
  );

  return (
    <Box className={classes.root}>
      <UnstyledButton className={classes.action} onClick={() => resetSettings()}>
        <IconReload size={20} />
      </UnstyledButton>
      <UnstyledButton className={classes.action} onClick={() => toggleColorScheme()}>
        {colorScheme === 'light' ? (
          <IconBrightnessUp size={20} />
        ) : (
          <IconBrightnessDown size={20} />
        )}
      </UnstyledButton>
    </Box>
  );
}
