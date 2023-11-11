import  { CSSProperties, ReactNode } from "react";
import { box } from '../styles/styles';

interface BoxProps {
  children: ReactNode;
  style?: CSSProperties;
}

const Box = ({ children, style }: BoxProps) => {
  return (
    <div style={{ ...box, ...style }}>
      {children}
    </div>
  );
}
export default Box;
// every component should start with a box like this