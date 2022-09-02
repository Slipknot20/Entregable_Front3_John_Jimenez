import React from 'react'
import data from './data.json'
import Item from './Item'

export default function Listado({numero}) {
  
  return (
    <div className='container'>
      {
        data.map((producto) => <Item 
        key={(producto.id)} 
        titulo={(producto.producto.nombre)} 
        descripcion={(producto.producto.descripcion)} 
        stock={(producto.stock)} aumento={numero}/>)
      }
    </div>
  )
}
