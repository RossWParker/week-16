// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ListGroup, Button, Form, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, updateCartItem } = useContext(CartContext);

  const handleQuantityChange = (productId, size, quantity) => {
    updateCartItem(productId, size, quantity);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ListGroup>
        {cart.map(item => (
          <ListGroup.Item key={item.id}>
            <Row>
              <Col md={4}>{item.name} ({item.size})</Col>
              <Col md={2}>${item.price}</Col>
              <Col md={3}>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, item.size, parseInt(e.target.value))}
                  min="1"
                />
              </Col>
              <Col md={3}>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="success" className="mt-3">Checkout</Button>
    </div>
  );
};

export default Cart;
