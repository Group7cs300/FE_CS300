import React from "react";

interface Props {
  border: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({ 
    border,
    backgroundColor,
    color,
    fontSize,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: backgroundColor,
         color: color,
         fontSize: fontSize,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;