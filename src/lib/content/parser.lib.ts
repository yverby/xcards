import { Content } from 'mdast';
import { cloneElement, createElement, FC } from 'react';

type Config<C extends { type: string }, R> = {
  [N in C as N['type']]: (node: N) => R;
};

type Elements = Partial<Record<Content['type'], FC<any> | keyof HTMLElementTagNameMap>>;

type JSXConfig = Config<Content, ReturnType<typeof createElement>>;
type StringConfig = Config<Content, string>;

export function createContentParser<E extends Elements>(elements: E) {
  function getJSX(content: Content[]) {
    return content.map((node, key) => {
      // @ts-expect-error
      const { [node.type]: createType } = getJSX.type;
      return createType ? cloneElement(createType(node), { key }) : null;
    });
  }

  getJSX.type = Object.entries(elements).reduce(
    (types, [type, element]) => ({
      ...types,
      [type]: function createType(node: any) {
        const { value, children, type: _, start, position, ...props } = node;
        return createElement(element, props, children ? getJSX(children) : value);
      },
    }),
    {} as Pick<JSXConfig, Extract<keyof JSXConfig, keyof E>>
  );

  function getString(content: Content[]) {
    return content
      .map((node) => {
        // @ts-expect-error
        const { [node.type]: createType } = getString.type;
        return createType ? createType(node) : null;
      })
      .flat(Infinity)
      .join(' ');
  }

  getString.type = Object.keys(elements).reduce(
    (types, type) => ({
      ...types,
      [type]: function createType(node: any) {
        const { value, children } = node;
        return children ? getString(children) : value;
      },
    }),
    {} as Pick<StringConfig, Extract<keyof StringConfig, keyof E>>
  );

  return { getJSX, getString };
}

export const defaultContentElements: Elements = {
  code: 'pre',
  text: 'span',
  heading: 'h3',
  emphasis: 'em',
  paragraph: 'p',
  strong: 'strong',
  inlineCode: 'code',
};
