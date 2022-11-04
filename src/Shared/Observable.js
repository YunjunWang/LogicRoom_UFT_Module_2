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
    // if there's no data, eager observers won't get any data updated
    // with eager observers, any following data update still need to
    // be notified to get all the observers gets called,
    // if not, no data will get updated
    // this.notify();
  };

  notify = () => {
    this.observers.forEach((observer) => {
      observer(this._value);
      // to show what's been notified
      //   alert(
      //     "notify observers: \n" +
      //       this.observers +
      //       "\n\n\n with new value: \n" +
      //       JSON.stringify(this._value)
      //   );
    });
  };
}
