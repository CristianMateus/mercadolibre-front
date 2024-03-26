import React, { useState, ChangeEvent, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../Routes";
import useProductService from "../../hooks/useProductService/useProductService";

const withSearch = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithSearch: React.FC<P> = (props) => {
    const [searchText, setSearchText] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const { loading, products, categories } = useProductService({
      searchQuery,
    });

    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSearchQuery(searchText);
      const currentPath = location.pathname;
      if (
        currentPath !== ROUTE_PATHS.home &&
        currentPath !== ROUTE_PATHS.products
      ) {
        navigate(ROUTE_PATHS.home);
      }
      console.log(searchQuery);
    };

    return (
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithSearch;
};

export default withSearch;
