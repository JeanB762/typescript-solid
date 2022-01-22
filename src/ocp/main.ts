import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  // NoDiscount,
  // TenPercentDiscount,
  // FifteenPercentDiscount,
  TwentyPercentDiscount,
  // ThirtyPercentDiscount,
  // FortyPercentDiscount,
  // FiftyPercentDiscount,
} from './classes/discount';

// const noDiscount = new NoDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const fifteenPercentDiscount = new FifteenPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
// const thirtyPercentDiscount = new ThirtyPercentDiscount();
// const fortyPercentDiscount = new FortyPercentDiscount();
// const fiftyPercentDiscount = new FiftyPercentDiscount();

const shoppingCart = new ShoppingCart(twentyPercentDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product('t-shirt', 49.99));
shoppingCart.addItem(new Product('pants', 139.99));
shoppingCart.addItem(new Product('belt', 29.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

order.checkout();

console.log(order.orderStatus);
console.log(shoppingCart.items.length);
