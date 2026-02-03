import { Component } from "../common/Component.js";

// In here it takes each cart item obj: this.props.cartItem
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

// As well as cartContext instance  = this.props.cartContext
export class CartItem extends Component {
  render() {
    console.log(this.props);
    const { id, title, price, description, category, image, rating } =
      this.props.cartItem;

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add("cart-item-des");

    // image
    const pImage = document.createElement("img");
    pImage.setAttribute("src", image);
    pImage.classList.add("cart-item-img");

    // product title
    const pTitle = document.createElement("p");
    pTitle.textContent = title;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price-container");

    // product count and price
    const number = document.createElement("p");
    const foundItem = this.props.cartContext.count.find(
      (count) => count.id === this.props.cartItem.id,
    );
    const count = foundItem.count;
    number.textContent = count;

    const pPrice = document.createElement("p");

    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${(Number(price) * Number(count)).toFixed(2)}`;
    priceSpan.classList.add("price", "cartPrice");
    pPrice.textContent = `${price} x ${count} : `;
    pPrice.appendChild(priceSpan);

    // increment or decrement item
    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.classList.add("plus-btn");
    plus.addEventListener("click", () => {
      const foundItem = this.props.cartContext.count.find(
        (item) => item.id === id,
      );
      foundItem.count += 1;
      this.props.cartContext.reRender();
    });

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.classList.add("minus-btn");
    minus.addEventListener("click", () => {
      const foundItem = this.props.cartContext.count.find(
        (item) => item.id === id,
      );
      if (foundItem.count <= 1) {
        minus.disabled = true;
      } else {
        foundItem.count -= 1;
      }

      this.props.cartContext.reRender();
    });

    priceDiv.appendChild(plus);
    priceDiv.appendChild(pPrice);
    priceDiv.appendChild(minus);

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      this.props.cartContext.delete(this.props.cartItem.id);
    });
    deleteBtn.classList.add("deletebtn");

    div.appendChild(pTitle);
    div.appendChild(priceDiv);

    li.appendChild(pImage);
    li.appendChild(div);
    li.append(deleteBtn);

    return li;
  }
}

//<li>
//  <img
//    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
//    class="cart-item-img"
//  />
//  <div class="cart-item-des">
//    <p>Mens Casual Premium Slim Fit T-Shirts</p>
//     <div>
//        <button></button>
//        <p> 22.3 x 2 :<span class="price cartPrice">$44.6</span></p>
//        <button></button>;
//     </div>
//
//   </div>
//   <button class="deletebtn">Delete</button>
// </li>;
