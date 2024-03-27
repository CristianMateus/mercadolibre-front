import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import WithSearch from "./hoc/WithSearch";
import { Product } from "./services/ProductService/types";

interface RoutesComponentProps {
  products?: Product[];
}

export const ROUTE_PATHS = {
  home: "/",
  products: "/items",
  productsSearch: "/items?search=:category",
  product: "/items/:id",
};

const RoutesComponent: React.FC<RoutesComponentProps> = ({ products }) => {
  const productsProps = {
    products: products as Product[],
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
