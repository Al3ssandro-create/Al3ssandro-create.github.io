import React, { CSSProperties, ReactNode } from "react";
import { entire } from '../styles/styles';

interface BoxProps {
  children: ReactNode;
  style?: CSSProperties;
}

// commong style for padding and margins
// every component should start with a box like this

const Box: React.FC<BoxProps> = ({ children, style }) => {
  return (
    <>
      <div style={entire}>{children}</div>
    </>
  );
};

export default Box;
