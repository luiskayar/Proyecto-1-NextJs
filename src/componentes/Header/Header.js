import Link from "next/link";
import CartButton from "@/componentes/Buttons/CartButton";
import styles from "@/componentes/Header/Header.module.css"

function Header({ toggleCart }) {
  return (
    <nav className={styles.navBar}>

      <ul className={styles.navBarLinkList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/contactenos">Contactenos</Link></li>
      </ul>

      <CartButton toggleCart={toggleCart} />
    </nav>
  )
}

export default Header