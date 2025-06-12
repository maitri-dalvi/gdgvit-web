import React from 'react';
import Image from 'next/image';

interface AngularBracketProps {
  className?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const AngularBracket = ({
  className = "",
  src = "/lt.png",
  alt = "less-than",
  width = 94,
  height = 94,
}: AngularBracketProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default AngularBracket;
