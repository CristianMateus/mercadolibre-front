import React, { ChangeEvent } from "react";

import { SearchBarProps } from "./types";

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value)
      }
      placeholder="Search..."
    />
  );
};

export default SearchBar;
