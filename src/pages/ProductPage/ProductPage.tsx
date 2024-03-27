import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useProductService from "../../hooks/useProductService/useProductService";
import Loader from "../../components/Loader";
import "./styles.sass";
import { formatCurrency } from "../../utils/currencyUtils";
import Button from "../../components/Button";
import BreadCrumbs from "../../components/BreadCrumbs";
import { generateBreadcrumbs } from "../../utils/breadCrumbUtils";
import { ProductPageProps } from "./types";

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, product, fetchProduct } = useProductService();

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const price = formatCurrency(
    product?.price?.amount as number,
    product?.price?.currency === "COP"
      ? "$"
      : (product?.price?.currency as string),
    product?.price?.decimals
  );

  const condition = product?.condition === "new" ? "Nuevo" : "Usado";

  const soldQuantity = product?.sold_quantity || 0;

  return (
    <>
      {!loading && (
        <>
          <div className="productPage__breadcrumb">
            <BreadCrumbs
              breadCrumbs={generateBreadcrumbs([product?.category as string])}
            />
          </div>
          <div className="productPage__root">
            <div className="productPage__top">
              <div
                className="productPage__image"
                style={{ backgroundImage: `url(${product?.picture})` }}
              />
              <div className="productPage__mainData">
                <div className="productPage__mainData_soldLabel">
                  {condition} - {soldQuantity} vendidos
                </div>
                <div className="productPage__mainData_titleLabel">
                  {product?.title}
                </div>
                <div className="productPage__mainData_priceLabel">{price}</div>
                <Button text="Comprar" />
              </div>
            </div>
            <div className="productPage__bottom">
              <div className="productPage__bottom_descripionTitle">
                Descripcion del producto
              </div>
              <div className="productPage__bottom_descripion">
                {product?.description}
              </div>
            </div>
          </div>
        </>
      )}
      <Loader show={loading} />
    </>
  );
};

export default ProductPage;
