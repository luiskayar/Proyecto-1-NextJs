"use client"

import Header from "@/componentes/Header/Header";
import "./global.css"
import {createContext, useContext, useState} from "react";
import CartList from "@/componentes/CartList/CartList";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

const CartContext = createContext({cart: []});
export const useCart = () => useContext(CartContext);

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  const [shorCart, setShowCart] = useState(false)

  const toggleCart = () => setShowCart(!shorCart)
  const addProductToCart = (product) => setCart([...cart, product])
  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart([...cart])
  }

  return (
    <html lang="en">
      <body>

        <CartContext.Provider value={{cart: cart, addProductToCart: addProductToCart}}>
          <Header toggleCart={toggleCart} />

          <main>
            {shorCart && <CartList cart={cart} removeFromCart={removeFromCart}/> }
            {children}
          </main>
        </CartContext.Provider>
      </body>
    </html>
  )
}
