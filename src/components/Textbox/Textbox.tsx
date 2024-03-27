import React, { ChangeEvent, KeyboardEvent } from "react";

import "./styles.sass";
import { TextboxProps } from "./types";

const Textbox: React.FC<TextboxProps> = ({
  value,
  placeHolder,
  onChange = () => {},
  onEnter = () => {},
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onEnter?.();
    }
  };

  return (
    <input
      className="textbox__input"
      type="text"
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value)
      }
      placeholder={placeHolder}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Textbox;
