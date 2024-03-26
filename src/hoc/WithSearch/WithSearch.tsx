import React, { useState, ChangeEvent, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../Routes";
import useProductService from "../../hooks/useProductService/useProductService";
import SearchBar from "../../components/SearchBar";

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
    };

    return (
      <div>
        <form onSubmit={handleSearchSubmit}>
          <SearchBar value={searchText} onChange={setSearchText} />
          <button type="submit">Search</button>
        </form>
        <WrappedComponent
          {...props}
          useProductServiceReturn={{
            categories,
            products,
          }}
        />
      </div>
    );
  };

  return WithSearch;
};

export default withSearch;
