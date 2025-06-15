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
  src = "/gdglogo.png",
  alt = "less-than",
  width = 150,
  height = 150,
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
