import { forwardRef, ReactNode } from 'react';
import {
  Box,
  ScrollArea,
  Selectors,
  DefaultProps,
  createPolymorphicComponent,
} from '@mantine/core';

import { useStyles } from './Paper.styles';

interface PaperProps extends DefaultProps<Selectors<typeof useStyles>> {
  children: ReactNode;
}

export const Paper = createPolymorphicComponent<'div', PaperProps>(
  forwardRef<HTMLDivElement, PaperProps>(
    ({ styles, className, classNames, children, ...props }, ref) => {
      const { cx, classes } = useStyles(undefined, {
        name: 'Paper',
        styles,
        classNames,
      });

      return (
        <Box {...props} ref={ref} className={cx(classes.root, className)}>
          <ScrollArea
            h="100%"
            classNames={{
              viewport: classes.viewport,
              scrollbar: classes.scrollbar,
            }}
          >
            {children}
          </ScrollArea>
        </Box>
      );
    }
  )
);
