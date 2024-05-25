import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setEditForm({
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          image: response.data.image
        });
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`)
      .then(() => {
        console.log('Product deleted');
        navigate('/products');
      })
      .catch(error => console.error(error));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`, editForm)
      .then(response => {
        setProduct(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error(error));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      {isEditing ? (
        <Form onSubmit={handleEditSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={editForm.description}
              onChange={handleEditChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={editForm.price}
              onChange={handleEditChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={editForm.image}
              onChange={handleEditChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Save Changes
          </Button>
          <Button variant="secondary" className="mt-3 ms-2" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </Form>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Button variant="secondary" onClick={() => setIsEditing(true)}>Edit</Button>
          <Button variant="danger" className="ms-2" onClick={handleDelete}>Delete</Button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;












// import React, { useState, useEffect } from 'react'; 
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { Button } from 'react-bootstrap'; 
// import axios from 'axios'; 

// // Define ProductDetail functional component
// const ProductDetail = () => { 
//   const { id } = useParams(); 
//   const [product, setProduct] = useState(null); 
//   const navigate = useNavigate(); 

//   useEffect(() => { // useEffect hook to fetch product details when component mounts or id changes
//     axios.get(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`) // Fetch product details by id
//       .then(response => setProduct(response.data)) // Set product state with response data
//       .catch(error => console.error(error)); // Log any errors to the console
//   }, [id]); 

//   const handleDelete = () => { // Function to handle product deletion
//     axios.delete(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`) // Delete product by id
//       .then(() => { // If deletion is successful
//         console.log('Product deleted'); // Log message indicating product deletion
//         navigate('/products'); // Navigate back to products page
//       })
//       .catch(error => console.error(error)); // Log any errors to the console
//   };
  
//   if (!product) return <div>Loading...</div>; // If product is not loaded yet, display loading message

//   return ( 
//     <div> 
//         {/* Display product name, price and description */}
//       <h1>{product.name}</h1> 
//       <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} /> {/* Display product image */}
//       <p>{product.description}</p> 
//       <p>${product.price}</p> 
//       <Button variant="danger" onClick={handleDelete}>Delete</Button> 
//     </div> 
//   );
// };

// export default ProductDetail; 


