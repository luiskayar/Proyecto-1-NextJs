import Link from "next/link";

function BarraNavegacion() {
  return (
    <nav>
      <ul className="links-list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/productos">Productos</Link></li>
        <li><Link href="/contactenos">Contactenos</Link></li>
      </ul>
    </nav>
  )
}

export default BarraNavegacion