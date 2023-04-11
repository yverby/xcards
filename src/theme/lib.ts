import { ColorScheme } from '@mantine/core';

export function configureColors<C extends Record<string, Record<ColorScheme, string>>>(
  colorMap: C,
  { colorScheme }: { colorScheme: ColorScheme }
) {
  return Object.entries(colorMap).reduce(
    (acc, [key, color]) => ({ ...acc, [key]: color[colorScheme] }),
    {} as Record<keyof C, string>
  );
}
