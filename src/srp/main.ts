import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistence } from './services/persistence';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
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
