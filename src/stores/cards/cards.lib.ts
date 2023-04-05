import { Root, Content } from 'mdast';

export function sliceRoot({ children: content }: Root) {
  const start = content.findIndex((node) => node.type === 'heading' && node.depth === 6);

  return content.slice(start).reduce<Content[][][]>(
    (slices, node) => {
      const slice = slices.at(-1)!;
      const subslice = slice.at(-1)!;

      if (node.type === 'thematicBreak') {
        slices.push([[]]);
        return slices;
      }

      if (node.type === 'html' && node.value.includes('details')) {
        slice.length < 2 && slice.push([]);
        return slices;
      }

      subslice.push(node);
      return slices;
    },
    [[[]]]
  );
}

export function sliceItem(item: Content[][]) {
  const [visible = [], invisible = []] = item;

  const titleIndex = visible.findIndex((node) => node.type === 'heading');
  const optionsIndex = visible.findLastIndex((node) => node.type === 'list');

  const title = visible.slice(titleIndex, titleIndex + 1);
  const main = visible.slice(titleIndex + 1, optionsIndex);
  const options = visible.slice(optionsIndex, optionsIndex + 1);

  const optionIndex = invisible.findIndex((node) => node.type === 'heading');

  const details = invisible.slice(optionIndex + 1);
  const option = invisible.slice(optionIndex, optionIndex + 1);

  return { main, title, option, options, details };
}
