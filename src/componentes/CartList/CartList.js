"use client"

import styles from "@/componentes/CartList/CartList.module.css"

function CartList({cart, removeFromCart}) {

  return (
    <ul className={styles.cartList}>
      { cart.map((product, index) =>

        <li className={styles.cartProduct} key={index}>
          <p className={styles.cartProductName}>{product.name}</p>

          <button className={styles.removeCartButton} onClick={() => removeFromCart(index)}>
            -
          </button>
        </li>)
      }
    </ul>
  )
}

export default CartList