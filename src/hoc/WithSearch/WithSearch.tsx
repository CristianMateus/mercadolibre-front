import React, { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.sass";

import { ROUTE_PATHS } from "../../Routes";
import useProductService from "../../hooks/useProductService/useProductService";
import SearchBar from "../../components/SearchBar/SearchBar";
import BreadCrumbs from "../../components/BreadCrumbs";
import { BreadCrumb } from "../../components/BreadCrumbs/types";
import { replaceUrlParams } from "../../utils/urlUtils";
import Loader from "../../components/Loader";
import { generateBreadcrumbs } from "../../utils/breadCrumbUtils";

const withSearch = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithSearch: React.FC<P> = (props) => {
    const { loading, products, categories, fetchProducts } =
      useProductService();

    const navigate = useNavigate();
    const location = useLocation();

    const userOnProductPage = useMemo(
      () => /^\/items\/\w+$/.test(location.pathname),
      [location.pathname]
    );

    const searchParam: string =
      new URLSearchParams(location.search).get("search") || "";

    const handleSearchSubmit = useCallback((value: string) => {
      if (!value) {
        fetchProducts("");
        return;
      }
      fetchProducts(value);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      handleSearchSubmit(searchParam.toString());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParam]);

    const breadCrumbs: BreadCrumb[] = useMemo(
      () => generateBreadcrumbs(categories),
      [categories]
    );

    return (
      <>
        <div className="withSearch__root">
          <SearchBar
            onSubmit={(searchText) => {
              const url = replaceUrlParams(ROUTE_PATHS.productsSearch, {
                category: searchText,
              });
              console.log(url);
              navigate(url);
            }}
          />
          <div className="withSearch__mainContent">
            {!userOnProductPage && (
              <div className="withSearch__breadCrumbs">
                <BreadCrumbs breadCrumbs={breadCrumbs} />
              </div>
            )}
            <WrappedComponent {...props} products={products} />
          </div>
        </div>
        <Loader show={loading} />
      </>
    );
  };

  return WithSearch;
};

export default withSearch;
