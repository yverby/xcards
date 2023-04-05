import { Prism } from '@mantine/prism';
import { Code, List, Title } from '@mantine/core';

import { createContentParser } from '@src/lib/content';

function ContentHeading(props: any) {
  return <Title order={3}>{props.children}</Title>;
}

function ContentInlineCode(props: any) {
  return <Code>{props.children}</Code>;
}

function ContentCode(props: any) {
  return (
    <Prism noCopy language={props.lang} scrollAreaComponent="div">
      {props.children}
    </Prism>
  );
}

function ContentList(props: any) {
  return (
    <List withPadding type={props.ordered ? 'ordered' : 'unordered'}>
      {props.children}
    </List>
  );
}

function ContentListItem(props: any) {
  return <List.Item>{props.chidlren}</List.Item>;
}

export const cardParser = createContentParser({
  text: 'span',
  emphasis: 'em',
  paragraph: 'p',
  strong: 'strong',
  code: ContentCode,
  list: ContentList,
  heading: ContentHeading,
  listItem: ContentListItem,
  inlineCode: ContentInlineCode,
});
