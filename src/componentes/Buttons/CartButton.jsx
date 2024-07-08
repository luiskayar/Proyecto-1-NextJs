"use client"

import { SvgCart } from "@/componentes/Svgs/SvgCart";
import "./CartButton.css"

import {useCart} from "@/app/layout";

function CartButton({toggleCart}) {
  const { cart } = useCart();

  return (
    <button className="cart-button" onClick={toggleCart} >
      <SvgCart />

      <div className="cart-counter">
        { cart.length }
      </div>
    </button>
  )
}

export default CartButton