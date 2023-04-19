import { forwardRef, ReactNode } from 'react';
import {
  Box,
  ScrollArea,
  BoxProps,
  Selectors,
  DefaultProps,
  createPolymorphicComponent,
} from '@mantine/core';

import { useStyles } from './Paper.styles';

interface PaperProps extends DefaultProps<Selectors<typeof useStyles>> {
  children: ReactNode;
}

const PaperRoot = forwardRef<HTMLDivElement, PaperProps>(
  ({ styles, className, classNames, children, ...props }, ref) => {
    const { cx, classes } = useStyles(undefined, { name: 'Paper', styles, classNames });

    return (
      <Box component="article" {...props} ref={ref} className={cx(classes.root, className)}>
        <ScrollArea
          h="100%"
          classNames={{ viewport: classes.viewport, scrollbar: classes.scrollbar }}
        >
          {children}
        </ScrollArea>
      </Box>
    );
  }
);

const PaperHead = createPolymorphicComponent<'header', BoxProps>(
  forwardRef<HTMLDivElement, BoxProps>(({ styles, className, classNames, ...props }, ref) => {
    const { cx, classes } = useStyles(undefined, { name: 'Paper', styles, classNames });

    return <Box component="header" {...props} ref={ref} className={cx(classes.head, className)} />;
  })
);

const PaperBody = createPolymorphicComponent<'div', BoxProps>(
  forwardRef<HTMLDivElement, BoxProps>(({ styles, className, classNames, ...props }, ref) => {
    const { cx, classes } = useStyles(undefined, { name: 'Paper', styles, classNames });

    return <Box {...props} ref={ref} className={cx(classes.body, className)} />;
  })
);

export const Paper = createPolymorphicComponent<
  'article',
  PaperProps,
  { Head: typeof PaperHead; Body: typeof PaperBody }
>(PaperRoot);

Paper.Head = PaperHead;
Paper.Body = PaperBody;
