import { Button } from '@mantine/core';
import { IconBrightnessUp, IconBrightnessDown } from '@tabler/icons-react';

import { select, shallow } from '@src/lib/store';
import { useSettingsStore } from '@src/stores/settings';

export function BarTheme() {
  const { colorScheme, toggleColorScheme } = useSettingsStore(
    select(['colorScheme', 'toggleColorScheme']),
    shallow
  );

  return (
    <Button variant="primary" onClick={() => toggleColorScheme()}>
      {colorScheme === 'light' ? <IconBrightnessUp size={20} /> : <IconBrightnessDown size={20} />}
    </Button>
  );
}
