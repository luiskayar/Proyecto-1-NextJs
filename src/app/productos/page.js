"use client"
import "./Products.css"
import {useCart} from "@/app/layout";

const mockProducts = [
  {id: 1, name: "Pantalon"},
  {id: 2, name: "Remera"},
  {id: 2, name: "Mochila"},
  {id: 2, name: "Auto"},
]

function Productos() {
  const { addProductToCart} = useCart();

  return (
    <ul className="product-list">
      {
        mockProducts.map(product =>

        <li className="product-item"  key={product.name}>
          <p>{product.name}</p>
          <button onClick={() => addProductToCart(product)} className="add-button">+</button>
        </li>
        )
      }
    </ul>
  )
}

export default Productos