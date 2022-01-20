type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

// *** Class without principles ***

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';
  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return parseFloat(
      this._items.reduce((total, next) => total + next.price, 0).toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty!!!');
      return;
    }

    this._orderStatus = 'closed';

    this.sendMessage(
      'Congratulations!!!\nYour order has been successfully received.',
    );

    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log('Order saved successfully.');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Cart has been successfully cleaned.');
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 't-shirt', price: 49.99 });
shoppingCart.addItem({ name: 'pants', price: 139.99 });
shoppingCart.addItem({ name: 'belt', price: 29.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items.length);
