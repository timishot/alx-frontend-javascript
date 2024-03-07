class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Use Object.create to create a new object with the same prototype (class)
    return Object.create(this.constructor.prototype);
  }
}

export default Car;
