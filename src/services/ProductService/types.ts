import { BaseServiceResponse } from "../BaseService/types";

export interface GetProductsResponse extends BaseServiceResponse {
  categories: string[];
  items: Product[];
}

export interface GetProductResponse extends BaseServiceResponse {
  item: Product;
}

export interface ProductPrice {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Product {
  id: string;
  title: string;
  price: ProductPrice;
  picture: string;
  condition: string;
  free_shipping: Boolean;
  sold_quantity?: Number;
  description?: String;
}
