export function partition<T>(
  target: T[],
  predicate: (item: T, index: number, target: T[]) => boolean
) {
  return target.reduce<T[][]>(
    (acc, item, ...args) => {
      acc[predicate(item, ...args) ? 0 : 1].push(item);
      return acc;
    },
    [[], []]
  );
}
