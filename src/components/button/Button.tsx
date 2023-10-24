import React from "react";
import { ButtonProps } from "./ButtonProps";

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
};

export default Button;
