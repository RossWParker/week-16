import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  // Define state variables for name, number, and email
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the contact information to the console
    console.log('Contact Info:', { name, number, email });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {/* Create a form with input fields for name, number, and email */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          {/* Input field for name with onChange event to update state */}
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formNumber">
          <Form.Label>Phone Number</Form.Label>
          {/* Input field for phone number with onChange event to update state */}
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          {/* Input field for email with onChange event to update state */}
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* Button to submit the form */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;


