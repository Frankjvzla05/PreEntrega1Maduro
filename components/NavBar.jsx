import React from 'react'

export const NavBar = () => {
  return (
    <header>
        <h1>Frank's Shop</h1>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Mujer Ropa</a></li>
                <li><a href="#">Hombre Ropa</a></li>
                <li><a href="#">Electrónica</a></li>
                <li><a href="#">Joyas</a></li>
            </ul>
        </nav>
        <div className="carrito">
           🛒 1
        </div>
    </header>
  )
}
