import { Component } from "../common/Component.js";

// Each this.props.product:
// {
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

export class ProductItem extends Component {
  // <li>
  //   <img />8
  //   <div>
  //     <p>title</p>
  //     <p>description</p>
  //     <p>price</p>
  //   </div>
  // </li>

  render() {
    const { id, title, price, description, category, image, rating } =
      this.props.product;
    const li = document.createElement("li");
    const contentWrapper = document.createElement("div");
    const productImage = document.createElement("img");
    productImage.setAttribute("src", image);
    productImage.classList.add("product-img");
    const productTitle = document.createElement("p");
    productTitle.textContent = title;
    const productdes = document.createElement("p");
    productdes.textContent = description;
    const productPrice = document.createElement("p");
    productPrice.textContent = price;

    const addBtn = document.createElement("button");
    addBtn.textContent = " Add to cart";
    addBtn.addEventListener("click", () => {
      // Tracking how many times the same itmes added to the cart
      // Find the an item that is inside of count
      const foundCount = this.props.cartContext.count.find((c) => c.id === id);
      // If that item above is not found, set the item count for the first time
      if (!foundCount) {
        this.props.cartContext.count.push({ id: id, count: 1 });
      } else {
        // ohterwise, increment the count
        foundCount.count += 1;
      }

      // adding the clicked item to the cart if the item is not already in the cart
      const fountItem = this.props.cartContext.items.find((item) => {
        return item.id === id;
      });
      if (!fountItem) {
        this.props.cartContext.addItem(this.props.product);
      } else {
        this.props.cartContext.reRender();
      }
    });

    contentWrapper.appendChild(productTitle);
    contentWrapper.appendChild(productdes);
    contentWrapper.appendChild(productPrice);

    li.appendChild(productImage);
    li.appendChild(contentWrapper);
    li.appendChild(addBtn);

    return li;
  }
}
