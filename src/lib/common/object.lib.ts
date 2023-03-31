export function pick<T extends Object, K extends keyof T>(target: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, key) => ({ ...acc, ...(key in target && { [key]: target[key] }) }),
    {} as any
  );
}

export function omit<T extends Object, K extends keyof T>(
  target: T,
  keys: K[]
): Pick<T, Exclude<keyof T, K>> {
  return keys.reduce((acc, key) => ({ ...acc, [key]: undefined }), target);
}
