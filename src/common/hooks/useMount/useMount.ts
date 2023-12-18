/*
 * @Date: 2023-12-11 10:23:10
 * @Description: Create a custom hook to handle only triggering the mount once
 */
import { EffectCallback, useEffect } from 'react';

export function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}




