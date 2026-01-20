import { fetchFromStrapi } from "./strapi";

export async function getAllProducts() {
  return fetchFromStrapi("products?populate=*");
}

export async function getProductBySlug(slug) {
  return fetchFromStrapi(`products?filters[slug][$eq]=${slug}&populate=*`);
}
