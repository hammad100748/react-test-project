import React, { Component } from "react";
import Header from "./components/Header/Header";
import Select from "./UI/Select/Select"
import Product from './containers/Product/Product'

class App extends Component {
    
  
  handleSortInputChange = type => {
    this.refs.product.handleSortBy(type)       
  }

  render() {        
    return (
      <div>
        <Header />   
        <Select handleSortInputChange={this.handleSortInputChange} />
        <Product ref='product' />                     
      </div>
    );
  }
}

export default App;
