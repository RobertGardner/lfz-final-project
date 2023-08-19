export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

const localFetch = true;

const url = (path: string) => `${import.meta.env.VITE_API_URL}${path}`;

/**
 * Fetches all products from the API.
 */
export async function fetchCatalog(): Promise<Product[]> {
  return localFetch ? lcFetchCatalog() : apiFetchCatalog();
}

/**
 * Fetches a single product from the API.
 */
export async function fetchProduct(productId: number): Promise<Product> {
  return localFetch ? lcFetchProduct(productId) : apiFetchProduct(productId);
}

async function apiFetchCatalog(): Promise<Product[]> {
  const res = await fetch(url('/api/products'));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

async function apiFetchProduct(productId: number): Promise<Product> {
  const res = await fetch(url(`/api/products/${productId}`));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

const products: Product[] = [
  {
    productId: 1,
    name: 'Shake Weight',
    price: 2999,
    imageUrl: import.meta.env.BASE_URL + 'images/shake-weight.jpg',
    shortDescription:
      'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 2,
    name: 'ShamWow',
    price: 2595,
    imageUrl: import.meta.env.BASE_URL + 'images/shamwow.jpg',
    shortDescription:
      "It's like a chamois, towel, and sponge, all in one! Soaks up to 10x its weight in any liquid!",
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 3,
    name: 'Snuggie',
    price: 2900,
    imageUrl: import.meta.env.BASE_URL + 'images/snuggie.jpg',
    shortDescription:
      'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 4,
    name: 'Wax Vac',
    price: 999,
    imageUrl: import.meta.env.BASE_URL + 'images/wax-vac.jpg',
    shortDescription:
      'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 5,
    name: 'Ostrich Pillow',
    price: 9900,
    imageUrl: import.meta.env.BASE_URL + 'images/ostrich-pillow.jpg',
    shortDescription:
      'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 6,
    name: 'Tater Mitts',
    price: 830,
    imageUrl: import.meta.env.BASE_URL + 'images/tater-mitts.jpg',
    shortDescription:
      '8 Seconds is all you need with Tater Mitts. Quickly and easily prepare all your favorite potato dishes with Tater Mitts.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
];

console.log('products', products);

async function lcFetchCatalog(): Promise<Product[]> {
  return products;
}

async function lcFetchProduct(productId: number): Promise<Product> {
  const prod = products.find((p) => p.productId === productId);
  if (!prod) throw new Error(`${productId} not found`);
  return prod;
}
