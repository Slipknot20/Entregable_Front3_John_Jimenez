import React from 'react'

export default function Cabecera({contador}) {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos <span>{contador}</span></p>
    </header>
  )
}
