'use strict';

class Billing {
    #amount = 100;
    calculateTotal() {
        return this.#amount;
    }
}

class FixBilling extends Billing {
    calculateTotal() {
        return super.calculateTotal();
    }
}
class HourBilling extends Billing {
    constructor(hour) {
        super();
        this.hour = hour;
    }
    calculateTotal() {
        return super.calculateTotal() * this.hour;
    }
}
class ItemBilling extends Billing {
    constructor(items) {
        super();
        this.items = items;
    }
    calculateTotal() {
        return super.calculateTotal() * this.items.length;
    }
}

const elems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const hour = 24;
const billingArray = [new FixBilling(), new HourBilling(hour), new ItemBilling(elems)];

for (const billing of billingArray) {
    console.log(billing.calculateTotal());
}