import React from 'react';
import Product from './Product';
import '../styles/Home.css'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
  fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data => this.setState({ products: data }))
  }

  render() {
    const { products } = this.state;
    return (
      <div className="home-container">
      <h1 className="home-title">Welcome to our store!</h1>
        <div className="product-list">
          {products.map(product => (
            <Product key={product.id} product={product} />

          ))}
        </div>
      </div>
    );
  }
}
export default Home;