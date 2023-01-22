import React from 'react';
import '../styles/Product.css';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <img src={product.image} alt={product.title} />
          </div>
        <div className="content">   
           <h3 className="header">{product.title}</h3>
           <div className="meta">
            <span className="date">{product.description}</span>
       </div>
         <div className="description">
          <div className="ui right floated">
           <p>Price: {product.price}</p>
       </div>
        <div className="ui left floated">
         <button className="ui primary button">Add to Cart</button>
        </div>
          </div>
           </div>
            </div>
);
}
}

export default Product;



