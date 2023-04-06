import { Content } from 'mdast';

export function unpack(content: Content[], selectors: Content['type'][]): Content[][] {
  if (selectors.length) {
    return content.reduce(
      (acc, node: any) =>
        node.type === selectors[0]
          ? [...acc, ...(node.children ? unpack(node.children, selectors.slice(1)) : [node.value])]
          : acc,
      [] as any
    );
  }

  return [content];
}
