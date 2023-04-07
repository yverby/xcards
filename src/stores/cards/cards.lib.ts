import { Root, Content } from 'mdast';

import { createContentParser } from '@src/lib/content';

const optionParser = createContentParser({ text: 'span', heading: 'span' });

export function splitRoot({ children: content }: Root) {
  return content
    .filter((node) => node.type !== 'thematicBreak')
    .filter((node) => !(node.type === 'html' && node.value.includes('details')))
    .reduce<Content[][][]>(
      (slices, node) => {
        const slice = slices.at(-1)!;
        const subslice = slice.at(-1)!;

        if (node.type === 'heading' && node.depth === 6) {
          slices.push([[node]]);
          return slices;
        }

        if (node.type === 'heading' && node.depth === 4) {
          slice.push([node]);
          return slices;
        }

        subslice.push(node);
        return slices;
      },
      [[[]]]
    );
}

export function groupCard(item: Content[][]) {
  const [head = [], tail = []] = item;

  const title = head.findIndex((node) => node.type === 'heading');
  const option = tail.findIndex((node) => node.type === 'heading');
  const options = head.findLastIndex((node) => node.type === 'list');

  return {
    details: tail.slice(option + 1),
    title: head.slice(title, title + 1),
    body: head.slice(title + 1, options),
    option: tail.slice(option, option + 1),
    options: head.slice(options, options + 1),
    id: parseInt(optionParser.getString(head.slice(title, title + 1)), 10),
  };
}

export function parseOptions(list: ReturnType<typeof groupCard>[]) {
  return list.reduce((options, item) => {
    const id = parseInt(optionParser.getString(item.title), 10);
    const option = optionParser.getString(item.option).at(-1);

    return { ...options, ...(id && option && { [id]: option }) };
  }, {} as Record<number, string>);
}
