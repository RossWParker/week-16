// src/components/ProductList.js
// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Card, Button, Row, Col, Form } from 'react-bootstrap';
// import { CartContext } from '../contexts/CartContext';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useContext(CartContext);
//   const [selectedSizes, setSelectedSizes] = useState({});

//   useEffect(() => {
//     axios.get('https://664fb9f3ec9b4a4a602facfd.mockapi.io/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, []);

//   const handleSizeChange = (productId, size) => {
//     setSelectedSizes({ ...selectedSizes, [productId]: size });
//   };

//   return (
//     <Row>
//       {products.map(product => (
//         <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
//           <Card className="mb-4">
//             <Card.Img variant="top" src={product.image} />
//             <Card.Body>
//               <Card.Title>{product.name}</Card.Title>
//               <Card.Text>${product.price}</Card.Text>
//               <Form.Select
//                 value={selectedSizes[product.id] || ''}
//                 onChange={(e) => handleSizeChange(product.id, e.target.value)}
//               >
//                 <option value="">Select Size</option>
//                 <option value="S">S</option>
//                 <option value="M">M</option>
//                 <option value="L">L</option>
//                 <option value="XL">XL</option>
//               </Form.Select>
//               <Button
//                 variant="primary"
//                 className="mt-2"
//                 onClick={() => addToCart(product, selectedSizes[product.id])}
//                 disabled={!selectedSizes[product.id]}
//               >
//                 Add to Cart
//               </Button>
//               <Link to={`/products/${product.id}`}>
//                 <Button variant="secondary" className="mt-2">Details</Button>
//               </Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default ProductList;


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
// import { CartContext } from '../contexts/CartContext';



const ProductList = () => {
   const [products, setProducts] = useState([]);
  // const { addToCart } = useContext(CartContext);
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    axios.get('https://664fb9f3ec9b4a4a602facfd.mockapi.io/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes({ ...selectedSizes, [productId]: size });
  };

  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
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
              <Button
                variant="primary"
                className="mt-2"
                // onClick={() => addToCart(product, selectedSizes[product.id])}
                disabled={!selectedSizes[product.id]}
              >
                Add to Cart
              </Button>
              <Link to={`/products/${product.id}`}>
                <Button variant="secondary" className="mt-2">Details</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
