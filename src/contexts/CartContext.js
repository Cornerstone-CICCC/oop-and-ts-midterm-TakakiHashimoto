export class CartContext {
  constructor() {
    this.items = [];
    this.funcs = [];
    this.count = [];
    this.selectedData = [];
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
    this.reRender();
  }

  delete(id) {
    const index = this.items.findIndex((item) => item.id === id);
    this.items.splice(index, 1);
    const countIndex = this.count.findIndex((item) => item.id === id);
    this.count.splice(countIndex, 1);
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

  // so far,
}
