"use client"
import "./CartList.css"

function CartList({cart, removeFromCart}) {

  return (
    <ul className="cart-list">
      { cart.map((product, index) =>

        <li className="cart-product" key={index}>
          <p className="cart-product-name">{product.name}</p>

          <button className="remove-cart-button" onClick={() => removeFromCart(index)}>
            -
          </button>
        </li>)
      }
    </ul>
  )
}

export default CartList