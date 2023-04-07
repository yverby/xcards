import { Fragment } from 'react';
import { Prism } from '@mantine/prism';
import { Code, List, Title } from '@mantine/core';

import { createContentParser } from '@src/lib/content';

import { useStyles } from './Card.styles';

function ElementHeading(props: any) {
  return <Title order={4}>{props.children}</Title>;
}

function ElementInlineCode(props: any) {
  const { classes } = useStyles();

  return <Code className={classes.code}>{props.children}</Code>;
}

function ElementCode(props: any) {
  const { classes } = useStyles();

  return (
    <Prism noCopy language={props.lang} className={classes.prism} scrollAreaComponent="div">
      {props.children}
    </Prism>
  );
}

function ElementList(props: any) {
  return (
    <List withPadding type={props.ordered ? 'ordered' : 'unordered'}>
      {props.children}
    </List>
  );
}

function ElementListItem(props: any) {
  return <List.Item>{props.chidlren}</List.Item>;
}

export const cardParser = createContentParser({
  text: Fragment,
  emphasis: 'em',
  paragraph: 'p',
  strong: 'strong',
  code: ElementCode,
  list: ElementList,
  heading: ElementHeading,
  listItem: ElementListItem,
  inlineCode: ElementInlineCode,
});
