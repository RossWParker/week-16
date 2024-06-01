import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ListGroup, Button, Form, Row, Col, Modal } from 'react-bootstrap';

// Define Cart functional component
const Cart = () => {
  // Access cart-related functions from CartContext
  const { cart, removeFromCart, updateCartItem } = useContext(CartContext);
  // State variables for managing the edit modal
  const [showEditModal, setShowEditModal] = useState(false); // Controls the visibility of the edit modal
  const [selectedItem, setSelectedItem] = useState(null); // Stores the selected item to edit
  const [updatedSize, setUpdatedSize] = useState(''); // Stores the updated size
  const [updatedQuantity, setUpdatedQuantity] = useState(0); // Stores the updated quantity

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Event handler to initiate editing of an item
  const handleEdit = (item) => {
    setSelectedItem(item); // Set the selected item for editing
    setUpdatedSize(item.size); // Set the updated size to the current size
    setUpdatedQuantity(item.quantity); // Set the updated quantity to the current quantity
    setShowEditModal(true); // Show the edit modal
  };

  // Event handler to update the item in the cart
  const handleUpdate = () => {
    if (selectedItem) {
      updateCartItem(selectedItem.id, selectedItem.size, updatedSize, updatedQuantity); // Update the item in the cart
      setShowEditModal(false); // Hide the edit modal
    }
  };

  // Render the shopping cart
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {/* Iterate over each item in the cart */}
        {cart.map(item => (
          <ListGroup.Item key={`${item.id}-${item.size}`}>
            <Row className="align-items-center">
              {/* Display item details */}
              <Col md={4}>{item.name} ({item.size})</Col>
              <Col md={2}>${item.price}</Col>
              {/* Select input for choosing the quantity */}
              <Col md={3}>
                <Form.Control
                  as="select"
                  value={item.quantity}
                  onChange={(e) => updateCartItem(item.id, item.size, item.size, parseInt(e.target.value))}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </Form.Control>
              </Col>
              {/* Button to edit the item */}
              <Col md={2}>
                <Button variant="primary" onClick={() => handleEdit(item)}>Edit</Button>
              </Col>
              {/* Button to remove the item */}
              <Col md={1}>
                <Button variant="danger" onClick={() => removeFromCart(item.id, item.size)}>Remove</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Display total price and checkout button */}
      <div className="mt-3">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <Button variant="success">Checkout</Button>
      </div>

      {/* Modal for editing item */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form to update size and quantity */}
          <Form.Group className="mb-3">
            <Form.Label>Size</Form.Label>
            <Form.Select
              value={updatedSize}
              onChange={(e) => setUpdatedSize(e.target.value)}
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              value={updatedQuantity}
              onChange={(e) => setUpdatedQuantity(parseInt(e.target.value))}
              min="1"
            />
          </Form.Group>
        </Modal.Body>
        {/* Modal footer with cancel and update buttons */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;







