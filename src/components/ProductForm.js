import React, { useState } from 'react'; 
import { Form, Button } from 'react-bootstrap'; 
import axios from 'axios'; 

const ProductForm = () => { // Define ProductForm functional component
  const [name, setName] = useState(''); // Define state variable for product name and setter function
  const [description, setDescription] = useState(''); // Define state variable for product description and setter function
  const [price, setPrice] = useState(''); // Define state variable for product price and setter function
  const [image, setImage] = useState(''); // Define state variable for product image URL and setter function

  const handleSubmit = (e) => { 
    e.preventDefault(); // Prevent default form submission behavior

    
    // Check if any field is empty display message if so 
    if (!name || !description || !price || !image) { 
      alert('Please fill in all fields'); 
      return; 
    }

    // Create a new product object. set name, description price and image
    const newProduct = { 
      name, 
      description, 
      price: parseFloat(price), 
      image, 
    };

     // Send POST request to add new product, log data, 
    axios.post('https://664fb9f3ec9b4a4a602facfd.mockapi.io/products', newProduct) // Send POST request to add new product
      .then(response => { 
        console.log('Product added:', response.data); 
       
        setName(''); 
        setDescription(''); 
        setPrice(''); 
        setImage(''); 
      })
      .catch(error => { 
        console.error('There was an error adding the product:', error); // Log the error to console
        alert('Failed to add product'); // Display alert message for failed product addition
      });
  };

  return ( 
    <div> 
      <h1>Add New Product</h1> 
      <Form onSubmit={handleSubmit}> {/* Form with handleSubmit function as onSubmit event handler */}
        <Form.Group controlId="formName"> 
          <Form.Label>Name</Form.Label> 
          <Form.Control 
            type="text" 
            placeholder="Enter product name" 
            value={name} // Value of name state variable
            onChange={(e) => setName(e.target.value)} // onChange event handler to update name state
          />
        </Form.Group> 
        <Form.Group controlId="formDescription"> {/* Form group for product description input */}
          <Form.Label>Description</Form.Label> {/* Label for product description input */}
          <Form.Control 
            rows={3} 
            placeholder="Enter product description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </Form.Group> 
        <Form.Group controlId="formPrice"> {/* Form group for product price input */}
          <Form.Label>Price</Form.Label> 
          <Form.Control 
            type="number" 
            placeholder="Enter product price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </Form.Group> 
        <Form.Group controlId="formImage"> 
          <Form.Label>Image URL</Form.Label> 
          <Form.Control 
            type="text" 
            placeholder="Enter product image URL" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} // onChange event handler to update image state
          />
        </Form.Group> 
        <Button variant="primary" type="submit"> {/* Button to submit the form */}
          Add Product 
        </Button> 
      </Form> 
    </div> 
  );
};

export default ProductForm; 


// import React, { useState } from 'react'; 
// import { Form, Button } from 'react-bootstrap'; 
// import axios from 'axios'; 

// const ProductForm = () => { // Define ProductForm functional component
//   const [name, setName] = useState(''); // Define state variable for product name and setter function
//   const [description, setDescription] = useState(''); // Define state variable for product description and setter function
//   const [price, setPrice] = useState(''); // Define state variable for product price and setter function
//   const [image, setImage] = useState(''); // Define state variable for product image URL and setter function

//   const handleSubmit = (e) => { 
//     e.preventDefault(); // Prevent default form submission behavior

    
//     // Check if any field is empty display message if so 
//     if (!name || !description || !price || !image) { 
//       alert('Please fill in all fields'); 
//       return; 
//     }

//     // Create a new product object. set name, description price and image
//     const newProduct = { 
//       name, 
//       description, 
//       price: parseFloat(price), 
//       image, 
//     };

//      // Send POST request to add new product, log data, 
//     axios.post('https://664fb9f3ec9b4a4a602facfd.mockapi.io/products', newProduct) // Send POST request to add new product
//       .then(response => { 
//         console.log('Product added:', response.data); 
       
//         setName(''); 
//         setDescription(''); 
//         setPrice(''); 
//         setImage(''); 
//       })
//       .catch(error => { 
//         console.error('There was an error adding the product:', error); // Log the error to console
//         alert('Failed to add product'); // Display alert message for failed product addition
//       });
//   };

//   return ( 
//     <div> 
//       <h1>Add New Product</h1> 
//       <Form onSubmit={handleSubmit}> {/* Form with handleSubmit function as onSubmit event handler */}
//         <Form.Group controlId="formName"> 
//           <Form.Label>Name</Form.Label> 
//           <Form.Control 
//             type="text" 
//             placeholder="Enter product name" 
//             value={name} // Value of name state variable
//             onChange={(e) => setName(e.target.value)} // onChange event handler to update name state
//           />
//         </Form.Group> 
//         <Form.Group controlId="formDescription"> {/* Form group for product description input */}
//           <Form.Label>Description</Form.Label> {/* Label for product description input */}
//           <Form.Control 
//             rows={3} 
//             placeholder="Enter product description" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)} 
//           />
//         </Form.Group> 
//         <Form.Group controlId="formPrice"> {/* Form group for product price input */}
//           <Form.Label>Price</Form.Label> 
//           <Form.Control 
//             type="number" 
//             placeholder="Enter product price" 
//             value={price} 
//             onChange={(e) => setPrice(e.target.value)} 
//           />
//         </Form.Group> 
//         <Form.Group controlId="formImage"> 
//           <Form.Label>Image URL</Form.Label> 
//           <Form.Control 
//             type="text" 
//             placeholder="Enter product image URL" 
//             value={image} 
//             onChange={(e) => setImage(e.target.value)} // onChange event handler to update image state
//           />
//         </Form.Group> 
//         <Button variant="primary" type="submit"> {/* Button to submit the form */}
//           Add Product 
//         </Button> 
//       </Form> 
//     </div> 
//   );
// };

// export default ProductForm; 



