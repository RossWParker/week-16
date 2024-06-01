import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Form, Modal } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';

// Define ProductList functional component
const ProductList = () => {
  // State variables
  const [products, setProducts] = useState([]); // Stores the list of products
  const { addToCart } = useContext(CartContext); // Accesses the addToCart function from CartContext
  const [selectedSizes, setSelectedSizes] = useState({}); // Stores the selected size for each product
  const [selectedQuantities, setSelectedQuantities] = useState({}); // Stores the selected quantity for each product
  const [showModal, setShowModal] = useState(false); // Controls the visibility of the modal indicating successful addition to the cart

  // Fetch products from the API when the component mounts
  useEffect(() => {
    axios.get('https://664fb9f3ec9b4a4a602facfd.mockapi.io/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Event handler to update the selected size for a product
  const handleSizeChange = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  // Event handler to update the selected quantity for a product
  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities({ ...selectedQuantities, [productId]: quantity });
  };

  // Event handler to add a product to the cart
  const handleAddToCart = (product) => {
    const size = selectedSizes[product.id];
    const quantity = selectedQuantities[product.id] || 1;
    if (size && quantity > 0) {
      addToCart(product, size, quantity); // Add the product to the cart
      setShowModal(true); // Show the modal indicating successful addition to the cart
      // Clear selected sizes and quantities
      setSelectedSizes({});
      setSelectedQuantities({});
    }
  };

  // Render the list of products
  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              {/* Dropdown to select size */}
              <Form.Select
                value={selectedSizes[product.id] || ''}
                onChange={(e) => handleSizeChange(product.id, e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Form.Select>
              {/* Input field to select quantity */}
              <Form.Control
                type="number"
                min="1"
                value={selectedQuantities[product.id] || 1}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                className="mt-2"
              />
              {/* Button to add the product to the cart */}
              <Button
                variant="primary"
                className="mt-2"
                onClick={() => handleAddToCart(product)}
                disabled={!selectedSizes[product.id]}
              >
                Add to Cart
              </Button>
              {/* Button to view product details */}
              <Link to={`/products/${product.id}`}>
                <Button variant="secondary" className="mt-2">Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {/* Modal to show the success message when an item is added to the cart */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Item added to cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your item has been successfully added to the cart.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default ProductList;







