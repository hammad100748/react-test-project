import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { getProducts } from "../../Common/ApiCall";
import Loader from "../../UI/Loader/Loader";

class Product extends Component {
  state = {
    products: null,
    page: 1,
    lastPageIndex: 0,
    loadingState: false,
    sortBy: "",
    currentAdNumber: null,
    addImgUrl: "",
    showAdd: true,
    isProductsFinished: false,
    lastIndex: 10,
    bottom: false
  };

  getMoreProducts = async () => {
    this.setState({ loadingState: true, page: this.state.page + 1 });
    await getProducts(this.state.page, this.state.sortBy)
      .then(products => {
        if (JSON.parse(products).length > 0) {
          let newProducts = this.state.products.concat(JSON.parse(products));
          this.setState({
            products: newProducts,
            loadingState: false
          });
        } else {
          clearInterval(this.interval);
          this.setState({ loadingState: false, isProductsFinished: true });
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    getProducts(this.state.page, "")
      .then(products => {
        this.setState({
          lastPageIndex: this.state.lastPageIndex + JSON.parse(products).length
        });
        this.setState({ products: JSON.parse(products) });
        this.interval = setInterval(
          async () => await this.getMoreProducts(),
          1000
        );
      })
      .catch(err => console.log(err));

    this.refs.iScroll.addEventListener("scroll", () => {
      console.log(this.refs.iScroll);
      if (
        this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight + 1 >=
        this.refs.iScroll.scrollHeight
      ) {
        if (!this.props.loadingState) {
          this.setState({
            lastIndex: this.state.lastIndex + 10,
            isStateChanged: true
          });
        }
      }
      const bottom =
        this.refs.iScroll.scrollHeight - this.refs.iScroll.scrollTop ===
        this.refs.iScroll.clientHeight;
      if (bottom && !this.props.loadingState && this.state.isProductsFinished) {
        console.log(bottom);
        this.setState({ bottom: true });
      }
    });
  }

  async handleSortBy(sortBy) {
    console.log(sortBy);
    this.setState({ products: null });
    this.setState({ sortBy: sortBy });
    await getProducts(this.state.page, sortBy)
      .then(products => {
        console.log(JSON.parse(products));
        this.setState({ products: JSON.parse(products) });
      })
      .catch(err => console.log(err));
  }

  getAddImageUrl = () => {
    let rand = Math.floor(Math.random() * 1000);
    while (rand === this.state.currentAdNumber) {
      rand = Math.floor(Math.random() * 1000);
    }        
    return rand;
  };

  render() {
    return (
      <div ref="iScroll" style={{ height: "550px", overflow: "auto" }}>
        <ProductList
          lastIndex={this.state.lastIndex}
          products={this.state.products}
          loadingState={this.state.loadingState}
          getAddImageUrl={this.getAddImageUrl}
        />
        {this.state.loadingState && (
          <div style={{ marginLeft: "50%" }}>
            <Loader />
          </div>
        )}
        {this.state.bottom && (
          <div style={{ marginLeft: "50%" }}>
            <p>~ end of catalogue ~</p>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
