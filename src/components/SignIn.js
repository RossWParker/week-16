import React, { useState } from 'react'; // Import necessary modules from React
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Import Form, Button, Container, Row, and Col components from react-bootstrap library

const SignIn = () => { // Define SignIn functional component
  const [email, setEmail] = useState(''); // Define state variable for email and setter function
  const [password, setPassword] = useState(''); // Define state variable for password and setter function

  const handleSubmit = (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    // Add authentication logic here
    console.log('Signed in with', { email, password }); // Log signed in user's email and password
  };

  return ( // Return JSX to render sign-in form
    <Container> {/* Container to center the sign-in form */}
      <Row className="justify-content-md-center mt-5"> 
        <Col md={6}> 
          <h1>Sign In</h1> 
          <Form onSubmit={handleSubmit}> {/* Form with handleSubmit function as onSubmit event handler log data */}
            <Form.Group controlId="formEmail"> 
              <Form.Label>Email address</Form.Label> 
              <Form.Control 
                type="email" // Input type email
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} // onChange event handler to update email state
              />
            </Form.Group> 
            <Form.Group controlId="formPassword"> {/* Form group for password input */}
              <Form.Label>Password</Form.Label> {/* Label for password input */}
              <Form.Control // Input field for password
                type="password" // Input type password
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} // onChange event handler to update password state
              />
            </Form.Group> 
            <Button variant="primary" type="submit"> 
              Sign In 
            </Button> 
          </Form> 
          <p className="mt-3">Don't have an account? <a href="/signup">Sign up here</a>.</p> {/* Link to sign up page */}
        </Col> 
      </Row> 
    </Container> 
  );
};

export default SignIn; 


