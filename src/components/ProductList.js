import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 
import { Card, Button, Row, Col } from 'react-bootstrap'; // Import Card, Button, Row, and Col components from react-bootstrap library

const ProductList = () => { // Define ProductList functional component
  const [products, setProducts] = useState([]); // Define state variable for products and setter function

  useEffect(() => { // useEffect hook to fetch product list when component mounts
    axios.get('https://664fb9f3ec9b4a4a602facfd.mockapi.io/products') // Fetch product list from API
      .then(response => setProducts(response.data)) // Set products state with response data
      .catch(error => console.error(error)); // Log any errors to the console
  }, []); 

  return ( // Return JSX to render product list
    <Row> {/* Start of Row component */}
      {products.map(product => ( // Map through products array and render Card component for each product
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}> {/* Start of Col component */}
          <Card className="mb-4"> {/* Card component for displaying product */}
            <Card.Img variant="top" src={product.image} /> {/* Product image */}
            <Card.Body> {/* Card body */}
              <Card.Title>{product.name}</Card.Title> {/* Product name */}
              <Card.Text> {/* Product price */}
                ${product.price}
              </Card.Text>
              <Link to={`/products/${product.id}`}> {/* Link to product detail page */}
                <Button variant="primary">Details</Button> {/* Button to view product details */}
              </Link> 
            </Card.Body> 
          </Card> 
        </Col> 
      ))} 
    </Row> 
  );
};

export default ProductList; 


