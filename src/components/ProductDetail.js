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
        setEditForm(response.data);
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
    axios.patch(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`, editForm)
      .then(() => {
        console.log('Product updated');
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
// import { Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// // Define ProductDetail functional component
// const ProductDetail = () => {
//   // Retrieve the id parameter from the URL
//   const { id } = useParams();
//   // State variables for managing product data and edit form
//   const [product, setProduct] = useState(null); // Stores the product data
//   const [isEditing, setIsEditing] = useState(false); // Indicates whether the user is in editing mode
//   const [editForm, setEditForm] = useState({ // Stores the data for the edit form
//     name: '',
//     description: '',
//     price: '',
//     image: ''
//   });
//   const navigate = useNavigate(); // Hook for navigating programmatically

//   // Fetch product data from the API when the component mounts or when the id parameter changes
//   useEffect(() => {
//     axios.get(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`)
//       .then(response => {
//         setProduct(response.data); // Set the product data
//         setEditForm({ // Set the edit form data
//           name: response.data.name,
//           description: response.data.description,
//           price: response.data.price,
//           image: response.data.image
//         });
//       })
//       .catch(error => console.error(error));
//   }, [id]);

//   // Event handler for deleting the product
//   const handleDelete = () => {
//     axios.delete(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`)
//       .then(() => {
//         console.log('Product deleted');
//         navigate('/products'); // Navigate to the products page after deletion
//       })
//       .catch(error => console.error(error));
//   };

//   // Event handler for updating the edit form data
//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm({ ...editForm, [name]: value }); // Update the corresponding field in the edit form
//   };

//   // Event handler for submitting the edit form
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`, editForm)
//       .then(response => {
//         setProduct(response.data); // Update the product data with the edited values
//         setIsEditing(false); // Exit editing mode
//       })
//       .catch(error => console.error(error));
//   };

//   // Render the product detail page
//   if (!product) return <div>Loading...</div>; // Display a loading message if product data is not yet available
//   return (
//     <div>
//       {/* Render either the edit form or the product details based on the editing mode */}
//       {isEditing ? (
//         <Form onSubmit={handleEditSubmit}>
//           {/* Form fields for editing product details */}
//           <Form.Group controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               value={editForm.name}
//               onChange={handleEditChange}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formDescription">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               name="description"
//               value={editForm.description}
//               onChange={handleEditChange}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formPrice">
//             <Form.Label>Price</Form.Label>
//             <Form.Control
//               type="number"
//               name="price"
//               value={editForm.price}
//               onChange={handleEditChange}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formImage">
//             <Form.Label>Image URL</Form.Label>
//             <Form.Control
//               type="text"
//               name="image"
//               value={editForm.image}
//               onChange={handleEditChange}
//               required
//             />
//           </Form.Group>
//           {/* Buttons for saving changes or canceling edit */}
//           <Button variant="primary" type="submit" className="mt-3">
//             Save Changes
//           </Button>
//           <Button variant="secondary" className="mt-3 ms-2" onClick={() => setIsEditing(false)}>
//             Cancel
//           </Button>
//         </Form>
//       ) : (
//         <div>
//           {/* Render product details */}
//           <h1>{product.name}</h1>
//           <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
//           <p>{product.description}</p>
//           <p>${product.price}</p>
//           {/* Buttons for editing or deleting the product */}
//           <Button variant="secondary" onClick={() => setIsEditing(true)}>Edit</Button>
//           <Button variant="danger" className="ms-2" onClick={handleDelete}>Delete</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;





