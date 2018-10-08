class SmartCalculator {
  constructor(initialValue) {
    this._initValue = `${initialValue}`;
  }

  add(number) {
    this._initValue += `+${number}`;
    return this;
  }
  
  subtract(number) {
    this._initValue += `-${number}`;
    return this;
  }

  multiply(number) {
    this._initValue += `*${number}`;
    return this;
  }

  devide(number) {
    this._initValue += `/${number}`;
    return this;
  }

  pow(number) {
    this._initValue += `**${number}`;
    return this;
  }

  valueOf(){
    let str = this._initValue;
    return eval(str);
  }
}

module.exports = SmartCalculator;
