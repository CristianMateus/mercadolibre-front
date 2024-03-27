import React from "react";

import SearchIcon from "../../assets/images/SearchSmall.png";
import "./styles.sass";
import { SearchButtonProps } from "./types";

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button className="searchButton__button" onClick={onClick}>
      <img alt="searchIcon" src={SearchIcon} />
    </button>
  );
};

export default SearchButton;
