import React from "react";

import "./styles.sass";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ text, onClick = () => {} }) => {
  return (
    <button onClick={() => onClick()} className="button__root">
      {text}
    </button>
  );
};

export default Button;
