"use client";

import { Typewriter as TypewriterEffect } from 'react-simple-typewriter';

interface Props {
  text: string;
  className?: string;
}

export const Typewriter = ({ text, className }: Props) => {
  return (
    <h2 className={className}>
      <TypewriterEffect
        words={[text]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={70}
        delaySpeed={1000}
      />
    </h2>
  );
};
