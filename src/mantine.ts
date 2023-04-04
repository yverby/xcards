import { MantineTheme } from '@mantine/core';

import { cs } from '@src/theme/variables';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    vars: {
      cs: (theme: MantineTheme, key: keyof typeof cs) => any;
    };
  }
}
