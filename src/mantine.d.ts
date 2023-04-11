import '@mantine/core';

import { configureOther } from '@src/theme/config';

declare module '@mantine/core' {
  export interface MantineThemeOther extends ReturnType<typeof configureOther> {}
}
