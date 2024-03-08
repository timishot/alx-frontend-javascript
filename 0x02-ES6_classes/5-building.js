export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    const parsedSqft = parseFloat(value);
    if (!Number.isNaN(parsedSqft)) {
      this._sqft = parsedSqft;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line class-methods-use-this
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
