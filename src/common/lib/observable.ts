export class Observable {
  observers: any[];
  constructor() {
    this.observers = [];
  }

  subscribe(func: any) {
    this.observers.push(func);
  }

  unsubscribe(inputFunc: any) {
    this.observers.filter((func) => func != inputFunc);
  }

  notify(data: any) {
    this.observers.forEach((func) => func(data));
  }
}

export default new Observable();
