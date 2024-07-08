"use client"

import {useCart} from "@/app/layout";
import {products} from "@/api/products";
import styles from "@/app/productos/Products.module.css"

function Productos() {
  const { addProductToCart} = useCart();

  return (
    <ul className={styles.productList}>
      {
        products.map(product =>

        <li className={styles.productItem}  key={product.name}>
          <p>{product.name}</p>
          <button onClick={() => addProductToCart(product)} className={styles.addButton}>+</button>
        </li>
        )
      }
    </ul>
  )
}

export default Productos