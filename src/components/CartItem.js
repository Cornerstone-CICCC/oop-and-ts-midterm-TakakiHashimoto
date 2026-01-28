import { Component } from "../common/Component.js";

export class CartItem extends Component {
  render() {
    const { id, title, price, description, category, image, rating } =
      this.props.cartItem;

    const li = document.createElement("li");
    const div = document.createElement("div");

    // image
    const pImage = document.createElement("img");
    pImage.setAttribute("src", image);

    const pTitle = document.createElement("p");
    pTitle.textContent = title;

    const number = document.createElement("p");
    const foundItem = this.props.cartContext.count.find(
      (count) => count.id === this.props.cartItem.id,
    );
    const count = foundItem.count;
    number.textContent = count;

    const pPrice = document.createElement("p");
    pPrice.textContent = `${price} x ${count} : ${Number(price) * Number(count)}`;

    div.appendChild(pTitle);
    div.appendChild(pPrice);

    li.appendChild(pImage);
    li.appendChild(div);

    return li;
  }
}

// <li>
//   <img />
//   <div>
//     <p>title</p>
//     <p>Price</p>
//     <p>How many</p>
//   </div>
// </li>;
