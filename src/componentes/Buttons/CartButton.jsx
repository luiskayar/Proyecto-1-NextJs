"use client"

import { SvgCart } from "@/componentes/Svgs/SvgCart";
import styles from "@/componentes/Buttons/CartButton.module.css"

import {useCart} from "@/app/layout";

function CartButton({toggleCart}) {
  const { cart } = useCart();

  return (
    <button className={styles.cartButton} onClick={toggleCart} >
      <SvgCart />

      <div className={styles.cartCounter}>
        { cart.length }
      </div>
    </button>
  )
}

export default CartButton