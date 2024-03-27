import React from "react";
import "./styles.sass";

import { ProductsPageProps } from "./types";
import Card from "../../components/Card";
import { formatCurrency } from "../../utils/currencyUtils";
import FreeShippingLogo from "../../assets/images/ShippingIconSmall.png";
import { Product } from "../../services/ProductService/types";
import { useNavigate } from "react-router-dom";
import { replaceUrlParams } from "../../utils/urlUtils";
import { ROUTE_PATHS } from "../../Routes";

const ProductsPage: React.FC<ProductsPageProps> = ({ products = [] }) => {
  const navigate = useNavigate();

  const onGoToProduct = (product: Product) => {
    navigate(replaceUrlParams(ROUTE_PATHS.product, { id: product.id }));
  };

  const onRenderProducts = () => {
    return products?.map((product) => {
      const price = formatCurrency(
        product.price.amount,
        product.price.currency === "COP" ? "$" : product.price.currency,
        product.price.decimals
      );

      const title = (
        <div className="productsPage__cardTitle">
          {price}
          {product.free_shipping && (
            <img alt="freeShipping" src={FreeShippingLogo} />
          )}
        </div>
      );

      const description = (
        <>
          <div>{product.title}</div>
          <div>{product.condition === "new" ? "Nuevo" : "Usado"}</div>
        </>
      );

      return (
        <Card
          key={product.id}
          imgSrc={product.picture}
          title={title}
          description={description}
          rightLabel={product.location as string}
          onClick={() => onGoToProduct(product)}
        />
      );
    });
  };

  return <div className="productsPage__root">{onRenderProducts()}</div>;
};

export default ProductsPage;
