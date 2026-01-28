import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: [],
    };
    this.ul = document.createElement("ul");
    this.updateCartList = this.updateCartList.bind(this);
    console.log(this.props.cartContext);
    this.props.cartContext.addFunc(this.updateCartList);
  }

  updateCartList(cartItem) {
    this.state.cartItem = cartItem;
    this.render();
  }

  render() {
    // Here, I want to show all the cart items added to the cart
    // == Get the cart item from cart context and display them
    this.ul.innerHTML = "";
    this.state.cartItem.map((item) => {
      const cartItem = new CartItem({
        cartItem: item,
        cartContext: this.props.cartContext,
      }).render();

      this.ul.appendChild(cartItem);
    });

    return this.ul;
  }
}
