import React from 'react';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.loadProducts()
    }
  }

  loadProducts() {
    return [
      {
        title: 'Cofee',
        price: 5
      },
      {
        title: 'Ice Tea',
        price: 3
      }
    ]
  }

  render() {
    return (
      <div className="products">
        <h1>Products</h1>
        {this.state.products.map(product =>
          <div>
            <strong>{product.title}</strong> — ${product.price}
          </div>
        )}
      </div>
    )
  }
}

export default Products
