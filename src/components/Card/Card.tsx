import { forwardRef, ReactNode } from 'react';
import {
  Box,
  ScrollArea,
  Selectors,
  DefaultProps,
  ScrollAreaProps,
  createPolymorphicComponent,
} from '@mantine/core';

import { useStyles } from './Card.styles';

type CardStylesNames = Exclude<Selectors<typeof useStyles>, 'scrollbar'>;

interface CardProps extends Omit<DefaultProps<CardStylesNames>, 'unstyled'> {
  children: ReactNode;
  scrollAreaProps?: ScrollAreaProps;
}

export const Card = createPolymorphicComponent<'div', CardProps>(
  forwardRef<HTMLDivElement, CardProps>(
    ({ styles, children, className, classNames, scrollAreaProps, ...props }, ref) => {
      const { cx, classes } = useStyles(undefined, {
        name: 'Card',
        styles,
        classNames,
      });

      return (
        <Box {...props} ref={ref} className={cx(classes.root, className)}>
          <ScrollArea h="100%" classNames={{ scrollbar: classes.scrollbar }} {...scrollAreaProps}>
            {children}
          </ScrollArea>
        </Box>
      );
    }
  )
);
