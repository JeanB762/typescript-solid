'use strict';
exports.__esModule = true;
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
  function ShoppingCart() {
    this._items = [];
  }
  ShoppingCart.prototype.addItem = function (item) {
    this._items.push(item);
  };
  ShoppingCart.prototype.removeItem = function (index) {
    this._items.splice(index, 1);
  };
  Object.defineProperty(ShoppingCart.prototype, 'items', {
    get: function () {
      return this._items;
    },
    enumerable: false,
    configurable: true,
  });
  return ShoppingCart;
})();
exports.ShoppingCart = ShoppingCart;
var shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 't-shirt', price: 49.9 });
shoppingCart.addItem({ name: 'pants', price: 139.9 });
shoppingCart.addItem({ name: 'belt', price: 29.9 });
console.log(shoppingCart.items);
