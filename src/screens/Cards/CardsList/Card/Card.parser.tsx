import { Fragment } from 'react';
import { Prism } from '@mantine/prism';
import { Code, List, Title, Anchor, ScrollArea } from '@mantine/core';

import { createContentParser } from '@src/lib/content';

import { useStyles } from './Card.styles';

function ElementHeading({ children }: any) {
  return <Title order={4}>{children}</Title>;
}

function ElementLink({ url, children }: any) {
  const { classes } = useStyles();

  return (
    <Anchor href={url} target="_blank" underline={false} className={classes.link}>
      {children}
    </Anchor>
  );
}

function ElementInlineCode({ children }: any) {
  const { classes } = useStyles();

  return <Code className={classes.code}>{children}</Code>;
}

function ElementCode({ lang, children }: any) {
  if (typeof children !== 'string') return null;

  return (
    <Prism
      noCopy
      language={lang}
      scrollAreaComponent={(props: any) => (
        <ScrollArea
          {...props}
          onMouseDownCapture={(event) => event.stopPropagation()}
          onTouchStartCapture={(event) => event.stopPropagation()}
        />
      )}
    >
      {children.replace(/\t/g, '  ')}
    </Prism>
  );
}

function ElementList({ ordered, children }: any) {
  const { classes } = useStyles();

  return (
    <List withPadding className={classes.list} type={ordered ? 'ordered' : 'unordered'}>
      {children}
    </List>
  );
}

function ElementListItem({ children }: any) {
  return <List.Item>{children}</List.Item>;
}

function ElementHTML({ children }: any) {
  const { classes } = useStyles();

  if (typeof children !== 'string') return null;

  return (
    <span
      className={classes.html}
      dangerouslySetInnerHTML={{
        __html: children.replace(/<script.*>.*<\/script>/ims, ' '),
      }}
    />
  );
}

export const cardParser = createContentParser({
  text: Fragment,
  emphasis: 'em',
  paragraph: 'p',
  strong: 'strong',
  html: ElementHTML,
  link: ElementLink,
  code: ElementCode,
  list: ElementList,
  heading: ElementHeading,
  listItem: ElementListItem,
  inlineCode: ElementInlineCode,
});
