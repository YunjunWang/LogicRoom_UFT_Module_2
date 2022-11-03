export default class Observable {
  _value = null;
  observers = [];

  constructor(initialValue) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  subscribe = (subscribeCallback) => {
    this.observers.push(subscribeCallback);

    // eager observers if uncomment the line below otherwise lazy observers
    // this.notify();
  };

  notify = () => {
    this.observers.forEach((observer) => {
      observer(this._value);
    });
  };
}
