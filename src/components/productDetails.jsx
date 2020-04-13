import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push("/products"); // When go back by browser, push will allow you to go back.
    this.props.history.replace("/products"); // When go back by browser, replace will not allow you to go back. Can be used if
    // you want to stop user to go back to login page.
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
