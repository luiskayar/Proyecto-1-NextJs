import Link from "next/link";
import CartButton from "@/componentes/Buttons/CartButton";

function  BarraNavegacion({ toggleCart }) {
  return (
    <nav>

      <ul className="links-list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/contactenos">Contactenos</Link></li>
      </ul>

      <CartButton toggleCart={toggleCart} />
    </nav>
  )
}

export default BarraNavegacion