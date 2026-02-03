import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { Header } from "./Header.js";
import { CategSelect } from "./CategSelect.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.productList = new ProductList({
      cartContext: this.props.cartContext,
    });
  }
  render() {
    const app = document.createElement("div");
    app.innerHTML = `
      <header class="header"></header>
      <main class="container">
        <div class="carousel">
            <div class="products">
            </div>
        </div>
        
      </main>
      <footer></footer>
    `;

    const categSelect = new CategSelect({
      cartContext: this.props.cartContext,
      productList: this.productList,
    }).render();

    const categDiv = document.createElement("div");
    categDiv.innerHTML = `<p>Category: </p>`;
    categDiv.classList.add("categContainer");
    categDiv.appendChild(categSelect);

    const container = app.querySelector(".container");
    container.appendChild(categDiv);
    // console.log(this.props.cartContext); // there is a cartContext here

    const appProduct = app.querySelector(".products");
    this.productList.mount(appProduct);

    const nav = new Header({ cartContext: this.props.cartContext }).render();
    const header = app.querySelector(".header");
    header.appendChild(nav);

    // adding carousel button
    const prev = document.createElement("button");
    prev.textContent = "<";
    prev.classList.add("btn", "prev");
    prev.addEventListener("click", () => {
      this.index--;
      this.showCarousel();
    });

    const next = document.createElement("button");
    next.textContent = ">";
    next.classList.add("btn", "next");
    next.addEventListener("click", () => {
      this.index++;
      this.showCarousel();
    });

    const carousel = app.querySelector(".carousel");
    carousel.appendChild(prev);
    carousel.appendChild(next);

    return app;
  }

  showCarousel() {
    const wrap = document.querySelector(".image-wrap");
    const carouselItems = wrap.querySelectorAll("li");
    if (this.index < 0) this.index = carouselItems.length - 1;
    if (this.index >= carouselItems.length) this.index = 0;
    wrap.style.transform = `translateX(-${this.index * 100}%)`;
  }
}

// <main class="container">
//   <div class="products">
//      <ul class="image-wrap">
//         <li>
//           <div>
//             <img />
//             <p>title</p>
//             <p>description</p>
//             <p>price</p>
//           </div>
//         </li>
//      </ul>
//   </div>
// </main>
