import { useCallback, useEffect, useState } from "react";

import { ProductService } from "../../services/ProductService/ProductService";
import { UseProductServiceProps, UseProductServiceReturn } from "./types";
import { Product } from "../../services/ProductService/types";

const useProductService = ({
  searchQuery,
  productId,
}: UseProductServiceProps): UseProductServiceReturn => {
  const [productService] = useState(() => new ProductService());
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(
    async (text: string) => {
      setLoading(true);
      try {
        const result = await productService.getProducts(text);
        setProducts(result?.items || []);
        setCategories(result?.categories || []);
        console.log(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [productService]
  );

  const fetchProduct = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const result = await productService.getProduct(id);
        setProduct(result?.item || null);
        console.log(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [productService]
  );

  useEffect(() => {
    if (searchQuery) {
      fetchProducts(searchQuery.toString());
    }
  }, [searchQuery, fetchProducts]);

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId, fetchProduct]);

  return {
    loading,
    products,
    categories,
    product,
  };
};

export default useProductService;
