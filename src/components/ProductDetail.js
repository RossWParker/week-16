import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import { Button } from 'react-bootstrap'; 
import axios from 'axios'; 

// Define ProductDetail functional component
const ProductDetail = () => { 
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => { // useEffect hook to fetch product details when component mounts or id changes
    axios.get(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`) // Fetch product details by id
      .then(response => setProduct(response.data)) // Set product state with response data
      .catch(error => console.error(error)); // Log any errors to the console
  }, [id]); 

  const handleDelete = () => { // Function to handle product deletion
    axios.delete(`https://664fb9f3ec9b4a4a602facfd.mockapi.io/products/${id}`) // Delete product by id
      .then(() => { // If deletion is successful
        console.log('Product deleted'); // Log message indicating product deletion
        navigate('/products'); // Navigate back to products page
      })
      .catch(error => console.error(error)); // Log any errors to the console
  };
  
  if (!product) return <div>Loading...</div>; // If product is not loaded yet, display loading message

  return ( // Return JSX to render product details and delete button
    <div> 
        {/* Display product name, price and description */}
      <h1>{product.name}</h1> 
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} /> {/* Display product image */}
      <p>{product.description}</p> 
      <p>${product.price}</p> 
      <Button variant="danger" onClick={handleDelete}>Delete</Button> 
    </div> 
  );
};

export default ProductDetail; // Export ProductDetail component


