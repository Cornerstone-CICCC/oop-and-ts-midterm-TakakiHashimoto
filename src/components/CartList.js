import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

// [
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },
//   {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     }
//   },
// ]

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: [],
    };
    this.ul = document.createElement("ul");
    this.updateCartList = this.updateCartList.bind(this);
    // console.log(this.props.cartContext);
    this.props.cartContext.addFunc(this.updateCartList);
  }

  updateCartList(cartItem) {
    // this will be the list of added items objects {}
    this.state.cartItem = cartItem;
    this.render();
  }

  render() {
    // Here, I want to show all the cart items added to the cart
    // == Get the cart item from cart context and display them
    this.ul.innerHTML = "";

    if (this.state.cartItem.length === 0) {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = "No items to show";
      li.appendChild(p);
      this.ul.appendChild(li);
    } else {
      this.state.cartItem.map((item) => {
        const cartItem = new CartItem({
          cartItem: item,
          cartContext: this.props.cartContext,
        }).render();

        this.ul.appendChild(cartItem);
      });
    }

    return this.ul;
  }
}
