import React, { useRef } from "react";

export function useCardRefs<T>(count: number) {
  const refs = useRef<React.RefObject<T>[]>([]);

  if (refs.current.length !== count) {
    refs.current = Array(count)
      .fill(null)
      .map((_, i) => refs.current[i] || React.createRef<T>());
  }

  return refs.current;
}
