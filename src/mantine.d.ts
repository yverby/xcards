import '@mantine/core';

import { createColors } from '@src/theme/variables';

declare module '@mantine/core' {
  export interface MantineThemeOther {
    colors: ReturnType<typeof createColors>;
  }
}
