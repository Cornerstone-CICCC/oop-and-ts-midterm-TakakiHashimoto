import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props); // this.props.cartContext = cartContext
    this.state = {
      products: [],
    };
  }
  async mount(container) {
    // fetch data from backend
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      this.state.products = products;
      container.appendChild(this.render());
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const productList = document.createElement("ul");
    productList.classList.add("image-wrap");
    console.log(this.props.cartContext); // this shows "CartContext {items: Array(0)}"
    this.state.products.map((product) => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext,
      });
      productList.appendChild(productItem.render());
    });

    return productList;
  }
}
