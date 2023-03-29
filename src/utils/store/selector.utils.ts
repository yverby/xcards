export { shallow } from 'zustand/shallow';

export function select<S extends Object, K extends keyof S>(keys: K[]) {
  return function (state: S): Pick<S, K> {
    return keys.reduce(
      (acc, key) => ({ ...acc, ...(key in state && { [key]: state[key] }) }),
      {} as any
    );
  };
}

export function unselect<S extends Object, K extends keyof S>(keys: K[]) {
  return function (state: S): Pick<S, Exclude<keyof S, K>> {
    return {
      ...state,
      ...keys.reduce((acc, key) => ({ ...acc, [key]: undefined }), {}),
    };
  };
}
