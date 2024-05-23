import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button } from 'react-bootstrap'; 
import ProductList from './ProductList'; 

const Products = () => ( // Define Products functional component
  <div> 
    <h1>Products</h1> 
    <Link to="/products/new"> {/* Link to navigate to Add New Product page */}
      <Button variant="primary" className="mb-3">Add New Product</Button> 
    </Link> 
    <ProductList /> {/* Render the ProductList component to display products */}
  </div> 
);

export default Products; 



