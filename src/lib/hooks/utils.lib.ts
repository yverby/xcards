import { useRef, useCallback, useLayoutEffect } from 'react';

export function useEvent<T extends (...args: any[]) => unknown>(callback: T) {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(((...args) => callbackRef.current(...args)) as T, []);
}
