import React from 'react';
import '../styles/Product.css';

class Product extends React.Component {


  
  state = {
    truncate: true
  }

  handleClick = () => {
    this.setState({truncate: !this.state.truncate})
  }

  handleAddToCart = () => {
    this.props.handleAddToCart(this.props.product);
  }


  render() {
    const { product } = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">   
          <h3 className={`header ${this.state.truncate ? "text-truncate" : ""}`}>{product.title}</h3>
          <div className={`meta ${this.state.truncate ? "text-truncate" : ""}`}>
            <span className="date">{product.description}</span>
</div>
  <button className="read-more-button" onClick={this.handleClick}>{this.state.truncate ? "Read More" : "Read Less"}</button>
    </div>
      <div className="ui right floated">
  <p>Price: {product.price}</p>
    </div>
      <div className="ui left floated">
      <button className="ui primary button " id="button" onClick={this.handleAddToCart}>
        Add to Cart
      </button>
    </div>
</div>
);
}
}

export default Product;



