import React, { useRef } from "react";
import { useInView } from "framer-motion";

export function useCardRefsInView<T extends HTMLElement = HTMLElement>(count: number) {
  const refs = useRef<React.RefObject<T>[]>([]);

  // Populate refs array with ref objects
  if (refs.current.length !== count) {
    refs.current = Array(count)
      .fill(null)
      .map((_, i) => refs.current[i] || React.createRef<T>());
  }

  const inViewArray = refs.current.map((ref) =>
    /* eslint-disable */
    useInView(ref, {
      once: true,
      amount: 0.3,
    })
  );

  return { refs, inViewArray };
}
