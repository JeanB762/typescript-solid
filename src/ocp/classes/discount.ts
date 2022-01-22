export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class FifteenPercentDiscount extends Discount {
  protected readonly discount = 0.15;
}

export class TwentyPercentDiscount extends Discount {
  protected readonly discount = 0.2;
}

export class ThirtyPercentDiscount extends Discount {
  protected readonly discount = 0.3;
}

export class FortyPercentDiscount extends Discount {
  protected readonly discount = 0.4;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}
