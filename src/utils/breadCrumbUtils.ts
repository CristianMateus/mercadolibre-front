import { BreadCrumb } from "../components/BreadCrumbs/types";
import { ROUTE_PATHS } from "../Routes";
import { replaceUrlParams } from "./urlUtils";

export const generateBreadcrumbs = (categories?: string[]): BreadCrumb[] => {
  if (!categories) return [];

  return categories.map((category) => {
    const breadCrumb: BreadCrumb = {
      name: category,
      href: replaceUrlParams(ROUTE_PATHS.productsSearch, { category }),
    };
    return breadCrumb;
  });
};
