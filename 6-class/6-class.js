class Car {
    #brand;
    #model;
    #mileage;
  
    constructor(brand, model, mileage) {
      this.#brand = brand;
      this.#model = model;
      this.#mileage = mileage;
    }
  
    get mileage() {
      return this.#mileage;
    }
  
    set mileage(newMileage) {
      if (newMileage >= 0) {
        this.#mileage = newMileage;
      } else {
        console.error("Пробег не может быть отрицательным");
      }
    }
  
    info() {
      console.log(`Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage} км`);
    }
  }

const myCar = new Car("Toyota", "Corolla", 50000);
myCar.info();
myCar.mileage = 55000;
myCar.info();
myCar.mileage = -100;