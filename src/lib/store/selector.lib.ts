import { pick, omit } from '@src/lib/common';

export { shallow } from 'zustand/shallow';

export function select<S extends Object, K extends keyof S>(keys: K[]) {
  return function (state: S) {
    return pick(state, keys);
  };
}

export function unselect<S extends Object, K extends keyof S>(keys: K[]) {
  return function (state: S) {
    return omit(state, keys);
  };
}
