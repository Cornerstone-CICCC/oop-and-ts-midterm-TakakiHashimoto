import { Component } from "../common/Component.js";
import { CartList } from "./CartList.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
    this.display = false;
    this.updateCount = this.updateCount.bind(this);
    this.props.cartContext.addFunc(this.updateCount);
    this.countElement = null;
  }

  updateCount(cartItem) {
    // when an item is added  to the cart, update the count and render
    // get the updated cart item list and set them to state
    this.state.cartItems = cartItem;
    this.countElement.textContent = this.state.cartItems.length;
    console.log("updated");
    // this one below works as well, but what is the difference between state and directly accessing the props?
    // this.countElement.textContent = this.props.cartContext.items.length;
    this.render();
  }

  render() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");
    const logo = document.createElement("div");
    logo.innerText = "Amazon";

    const cartLogo = document.createElement("img");
    cartLogo.setAttribute("src", "/public/cart.svg");

    // this is the div for wrapping cart icon and counter
    // means add itemCount and cart icon to this div
    const div = document.createElement("div");

    const cartBtn = document.createElement("button");
    cartBtn.addEventListener("click", () => {
      this.display = !this.display;
    });

    const itemCount = document.createElement("span");
    if (this.state.cartItems.length !== 0) {
      itemCount.innerText = this.state.cartItems.length;
    }
    // console.log(this.props.cartContext.items.length);
    if (this.display) {
      // show the modal
    }

    console.log(this.props.cartContext);
    const cartList = new CartList({
      cartContext: this.props.cartContext,
    }).render();

    cartBtn.appendChild(cartLogo);
    div.appendChild(cartBtn);
    div.appendChild(cartList);
    div.appendChild(itemCount);
    nav.appendChild(logo);
    nav.appendChild(div);

    this.countElement = itemCount;

    return nav;
  }
}

{
  /* <nav>
  <div>
    <p>Amazon</p>
  </div>
  <div>
    <button>
      <img />
    </button>
    <span></span>
  </div>
</nav>; */
}
