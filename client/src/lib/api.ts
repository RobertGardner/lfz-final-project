export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

/**
 * Fetches all products from the API.
 */
export async function fetchCatalog(): Promise<Product[]> {
  const res = await fetch('/api/products');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

/**
 * Fetches a single product from the API.
 */
export async function fetchProduct(productId: number): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
