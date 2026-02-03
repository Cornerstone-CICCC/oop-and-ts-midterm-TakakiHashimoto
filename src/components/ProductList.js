import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props); // this.props.cartContext = cartContext
    this.state = {
      products: [],
    };
    this.productList = document.createElement("ul");
  }

  async fetchData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return products;
  }
  async mount(container) {
    // fetch data from backend
    try {
      const products = await this.fetchData();
      this.state.products = products;
      container.appendChild(this.render());
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    this.productList.innerHTML = "";
    this.productList.classList.add("image-wrap");
    // console.log(this.props.cartContext); // this shows "CartContext {items: Array(0)}"
    this.state.products.map((product) => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext,
      });
      this.productList.appendChild(productItem.render());
    });

    return this.productList;
  }

  showCategItems() {
    this.productList.innerHTML = "";
    const data = this.props.cartContext.selectedData;
    data.map((product) => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext,
      });
      this.productList.appendChild(productItem.render());
    });

    console.log(data);

    return this.productList;
  }
}
