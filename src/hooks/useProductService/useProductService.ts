import { useState } from "react";

import { ProductService } from "../../services/ProductService/ProductService";
import { Product } from "../../services/ProductService/types";

const useProductService = () => {
  const [productService] = useState(() => new ProductService());
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (text: string) => {
    if (!text) {
      setProducts([]);
      setCategories([]);
      return;
    }

    setLoading(true);
    try {
      const result = await productService.getProducts(text);

      setProducts(result?.data?.items || []);
      setCategories(result?.data?.categories || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async (id: string) => {
    setLoading(true);
    try {
      const result = await productService.getProduct(id);

      setProduct(result?.data?.item || null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    products,
    categories,
    product,
    fetchProducts,
    fetchProduct,
  };
};

export default useProductService;
