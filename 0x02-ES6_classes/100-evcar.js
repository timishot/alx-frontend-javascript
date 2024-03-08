import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override the cloneCar method
  cloneCar() {
    // Create a new instance of the parent class (Car)
    // eslint-disable-next-line class-methods-use-this
    return new Car();
  }
}

export default EVCar;
