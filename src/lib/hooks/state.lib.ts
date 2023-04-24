/*eslint no-return-assign: "off"*/

import { useRef, useEffect } from 'react';
import { useInterval } from '@mantine/hooks';

export function useTimer(interval = 1000, { pause = false } = {}) {
  const value = useRef(0);
  const timer = useInterval(() => (value.current += 1), interval);

  useEffect(() => {
    if (!pause) timer.start();
    return timer.stop;
  }, [pause]);

  return () => value.current;
}
