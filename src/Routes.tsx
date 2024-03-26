import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import WithSearch from "./hoc/WithSearch";
import { UseProductServiceReturn } from "./hooks/useProductService/types";
import { Product } from "./services/ProductService/types";

interface RoutesComponentProps {
  useProductServiceReturn?: UseProductServiceReturn;
}

export const ROUTE_PATHS = {
  home: "/",
  products: "/items",
  product: "/items/:id",
};

const RoutesComponent: React.FC<RoutesComponentProps> = ({
  useProductServiceReturn,
}) => {
  const productsProps = {
    categories: useProductServiceReturn?.categories as string[],
    products: useProductServiceReturn?.products as Product[],
  };

  return (
    <Routes>
      <Route
        path={ROUTE_PATHS.home}
        element={<ProductsPage {...productsProps} />}
      />
      <Route
        path={ROUTE_PATHS.products}
        element={<ProductsPage {...productsProps} />}
      />
      <Route path={ROUTE_PATHS.product} element={<ProductPage />} />
    </Routes>
  );
};

export default WithSearch(RoutesComponent);
