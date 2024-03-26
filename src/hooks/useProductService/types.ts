import { Product } from "../../services/ProductService/types";

export interface UseProductServiceProps {
  searchQuery?: string | null;
  productId?: string | null;
}

export interface UseProductServiceReturn {
  loading: boolean;
  products: Product[];
  categories: string[];
  product: Product | null;
}
