'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class FixedBilling extends Billing {
  
}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, itemCount) {
    super(amount);
    this.itemCount = itemCount;
  }

  calculateTotal() {
    return this.amount * this.itemCount;
  }
}

const fixed = new FixedBilling(1000);
console.log(fixed.calculateTotal());

const hourly = new HourBilling(50, 20);
console.log(hourly.calculateTotal());

const item = new ItemBilling(30, 10);
console.log(item.calculateTotal());
