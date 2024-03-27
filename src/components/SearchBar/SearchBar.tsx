import React, { useState } from "react";

import { SearchBarProps } from "./types";
import Textbox from "../Textbox";
import SearchButton from "../SearchButton";
import "./styles.sass";
import Logo from "../../assets/images/LogoSmall.png";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../Routes";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    onSubmit(searchText);
  };

  return (
    <div className="searchBar__root">
      <img
        className="searchBar__logo"
        alt="searchBarLogo"
        src={Logo}
        onClick={() => navigate(ROUTE_PATHS.home)}
      />
      <div className="searchBar__textFieldContainer">
        <Textbox
          value={searchText}
          onChange={setSearchText}
          placeHolder="Nunca dejes de buscar"
          onEnter={handleSearchSubmit}
        />
        <SearchButton onClick={handleSearchSubmit} />
      </div>
    </div>
  );
};

export default SearchBar;
