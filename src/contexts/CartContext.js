export class CartContext {
  constructor() {
    this.items = [];
    this.funcs = [];
    this.count = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    console.log(this.items);
    this.reRender();
  }

  addFunc(func) {
    this.funcs.push(func);
  }

  reRender() {
    this.funcs.forEach((f) => {
      f(this.items);
    });
  }
}
