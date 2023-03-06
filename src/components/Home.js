import React from 'react';
import Product from './Product';
import '../styles/Home.css';
import { Grid } from 'semantic-ui-react'


class Home extends React.Component {
  state = { products: [], cart: [], }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  }
  handleAddToCart = (product) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }));
  }
  
  render() {
    const { products } = this.state;
    return (
      <div className="ui container">
        <div className="ui stackable four column equal width centered padded grid grid">
          <div className="column">
            <h1 className="ui header">Welcome to our store!</h1>
            <p>We offer a wide range of high-quality products at great prices. Browse our selection and find the perfect product for you.</p>
          </div>
          <div className="column">
          </div>
        </div>
        <div className="ui stackable four column equal width centered padded grid grid">

        <Grid columns={4}>
    {products.map(product => (
      <Grid.Column key={product.id}>
                <Product product={product} handleAddToCart={this.handleAddToCart} />
      </Grid.Column>
    ))}
  </Grid>
      </div>
        </div>
      
    );
  }
}

export default Home;
