"use client";

import { Typewriter as TypewriterEffect } from 'react-simple-typewriter';

interface Props {
  text: string;
  className?: string;
  startDelay?: number;
}

export const Typewriter = ({ text, className, startDelay = 0 }: Props) => {
  return (
    <h2 className={className}>
      <TypewriterEffect
        words={[text]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={70}
        delaySpeed={startDelay}
      />
    </h2>
  );
};
