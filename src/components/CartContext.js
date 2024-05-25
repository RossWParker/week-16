
// import React, { createContext, useState } from 'react';

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product, size) => {
//     setCart([...cart, { ...product, size, quantity: 1 }]);
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId));
//   };

//   const updateCartItem = (productId, size, quantity) => {
//     setCart(cart.map(item => item.id === productId ? { ...item, size, quantity } : item));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartContext, CartProvider };
