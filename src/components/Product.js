import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProductList from './ProductList';


// Define Products functional component
const Products = () => (
  <div>
    <h1>Products</h1>
    <Link to="/products/new">
      <Button variant="primary" className="mb-3">Add New Product</Button>
    </Link>
    <ProductList />
  </div>
);

export default Products;

