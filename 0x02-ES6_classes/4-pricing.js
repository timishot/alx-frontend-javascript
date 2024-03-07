import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this.Currency = new Currency('', '');

    this.amount = amount;
    this.currency = currency;
  }

  // Getter and setter for 'amount'
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    const parsedAmount = parseFloat(newAmount);
    if (!Number.isNaN(parsedAmount)) {
      this._amount = parsedAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
  }

  // Method to display full price information
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
