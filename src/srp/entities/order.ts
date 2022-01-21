import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { ShoppingCart } from './shopping-cart';
import { Persistence } from '../services/persistence';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty!!!');
      return;
    }

    this._orderStatus = 'closed';

    this.messaging.sendMessage(
      'Congratulations!!!\nYour order has been successfully received.',
    );

    this.persistence.saveOrder();

    this.cart.clear();
  }
}
