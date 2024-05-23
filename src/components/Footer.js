import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white mt-4 p-3 text-center">
    <Container>
      &copy; {new Date().getFullYear()} NFL Fan Store. All Rights Reserved.
    </Container>
  </footer>
);

export default Footer;
