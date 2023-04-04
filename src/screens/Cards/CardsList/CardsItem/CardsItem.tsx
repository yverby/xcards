import { ReactNode } from 'react';
import { Box, Title, Stack, Transition } from '@mantine/core';

import { useStyles } from './CardsItem.styles';

interface CardsItemProps {
  id: number;
  main: ReactNode;
  title: ReactNode;
  mounted: boolean;
  onMounted: () => void;
}

export function CardsItem({ id, main, title, mounted, onMounted }: CardsItemProps) {
  const { classes } = useStyles();

  return (
    <Transition mounted={mounted} duration={500} transition="fade" onEnter={onMounted}>
      {(style) => (
        <Box style={style} className={classes.card}>
          {mounted && (
            <>
              <Title px="xl" py="lg" order={2} className={classes.title}>
                #{id}
              </Title>
              <Stack px="xl" pb="xl">
                {title}
                {main}
              </Stack>
            </>
          )}
        </Box>
      )}
    </Transition>
  );
}
