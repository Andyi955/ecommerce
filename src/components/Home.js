import React from 'react';
import Product from './Product';
import '../styles/Home.css';
import { Card } from 'semantic-ui-react'


class Home extends React.Component {
  state = { products: [] }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }
  
  render() {
    const { products } = this.state;
    return (
      <div className="ui container">
        <div className="ui stackable two column equal width centered padded grid grid">
          <div className="column">
            <h1 className="ui header">Welcome to our store!</h1>
            <p>We offer a wide range of high-quality products at great prices. Browse our selection and find the perfect product for you.</p>
          </div>
          <div className="column">
            <img src="https://images.unsplash.com/photo-1525887051520-c5d5b5f5c5b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Hero Image" className="ui large rounded image" />
          </div>
        </div>
        <div className="ui stackable four column equal width centered padded grid grid">
        <Card.Group itemsPerRow={4}>
  {products.map(product => (
    <Product key={product.id} product={product} />
  ))}
</Card.Group>

        </div>
      </div>
    );
  }
}

export default Home;
