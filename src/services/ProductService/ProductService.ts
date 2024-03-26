import axios, { AxiosResponse } from "axios";

import { replaceUrlParams } from "../../utils/urlUtils";
import { BaseService } from "../BaseService/BaseService";
import { GetProductResponse, GetProductsResponse } from "./types";

export class ProductService extends BaseService {
  getProducts = async (
    searchQuery: string
  ): Promise<AxiosResponse<GetProductsResponse>> => {
    const url = replaceUrlParams(this.urls.GET_PRODUCTS, {
      searchQuery,
    });
    const responsve = axios.get(url);
    return await axios.get(url);
  };

  getProduct = async (id: string): Promise<GetProductResponse> => {
    const url = replaceUrlParams(this.urls.GET_PRODUCT, {
      id,
    });
    return await axios.get(url);
  };
}
