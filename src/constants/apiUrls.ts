const baseUrl = process.env.REACT_APP_BASE_API_URL;

const addBaseUrl = (url: string) => {
  return `${baseUrl}${url}`;
};

export const BASE_API_URLS = {
  GET_PRODUCTS: addBaseUrl("/api/items/?q=:searchQuery"),
  GET_PRODUCT: addBaseUrl("/api/items/:id"),
};
