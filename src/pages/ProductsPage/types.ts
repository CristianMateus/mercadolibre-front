import { Product } from "../../services/ProductService/types";

export interface ProductsPageProps {
  products: Product[];
  categories: String[];
}
