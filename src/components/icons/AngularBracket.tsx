import React from 'react';

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
  width = 140,
  height = 140,
}: AngularBracketProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default AngularBracket;
