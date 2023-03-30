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
