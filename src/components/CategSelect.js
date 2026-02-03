import { Component } from "../common/Component.js";

class CategSelect extends Component {
  render() {
    const select = document.createElement("select");
    select.innerHTML = `
        <option value="all">All</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
    `;

    select.addEventListener("change", async (e) => {
      console.log(this.props.cartContext);
      const selectedCateg = e.target.value;
      const data = await this.props.productList.fetchData();
      const products =
        selectedCateg === "all"
          ? data
          : data.filter((p) => p.category === selectedCateg);
      this.props.productList.state.products = products;
      this.props.productList.render();
    });

    return select;
  }
}

export { CategSelect };
