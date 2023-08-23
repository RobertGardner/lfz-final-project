import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

// If true, will serve from code instead of database.
const localData = false;

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;

console.log('Connecting to', connectionString);
console.log('env', process.env);

const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  if (localData) {
    res.json(products);
    return;
  }
  try {
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "shortDescription"
        from "products"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  if (localData) {
    res.json(
      products.find((p) => p.productId === Number(req.params.productId))
    );
    return;
  }
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "shortDescription",
            "longDescription"
        from "products"
        where "productId" = $1
    `;
    const params = [productId];
    const result = await db.query<Product>(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `cannot find product with productId ${productId}`
      );
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});

const products: Product[] = [
  {
    productId: 1,
    name: 'Shake Weight',
    price: 2999,
    imageUrl: '/images/shake-weight.jpg',
    shortDescription:
      'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 2,
    name: 'ShamWow',
    price: 2595,
    imageUrl: '/images/shamwow.jpg',
    shortDescription:
      "It's like a chamois, towel, and sponge, all in one! Soaks up to 10x its weight in any liquid!",
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 3,
    name: 'Snuggie',
    price: 2900,
    imageUrl: '/images/snuggie.jpg',
    shortDescription:
      'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 4,
    name: 'Wax Vac',
    price: 999,
    imageUrl: '/images/wax-vac.jpg',
    shortDescription:
      'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 5,
    name: 'Ostrich Pillow',
    price: 9900,
    imageUrl: '/images/ostrich-pillow.jpg',
    shortDescription:
      'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
  {
    productId: 6,
    name: 'Tater Mitts',
    price: 830,
    imageUrl: '/images/tater-mitts.jpg',
    shortDescription:
      '8 Seconds is all you need with Tater Mitts. Quickly and easily prepare all your favorite potato dishes with Tater Mitts.',
    longDescription:
      'Lorem ipsum dolor amet fashion axe pour-over jianbing, adaptogen waistcoat tacos master cleanse pitchfork next level. Thundercats pour-over chartreuse. Master cleanse hot chicken ennui offal. Freegan slow-carb offal hell of. Umami polaroid wolf slow-carb next level. Gentrify cardigan seitan, kombucha tacos chambray roof party typewriter man braid. Tote bag lo-fi hell of chia fam hammock.\n\nAesthetic photo booth la croix, vaporware leggings biodiesel man braid tumeric skateboard tousled slow-carb four dollar toast synth pabst pickled. Typewriter church-key chia slow-carb vice gochujang actually. Shoreditch austin woke hot chicken, single-origin coffee ugh affogato four loko green juice. Migas iPhone four dollar toast mustache.',
  },
];
