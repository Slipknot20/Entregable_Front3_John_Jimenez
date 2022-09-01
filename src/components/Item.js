// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react"

export default function Item({titulo, descripcion, stock, aumento}) {
  const [numeroStock, setNumeroStock] = useState(stock)

  const handleActualizar = () => {
      setNumeroStock(numeroStock-1)
  } 
  
  return (
      <div className='producto'>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <h5>En Stock: {numeroStock === 0 ? <span>Agotado</span> : `${numeroStock}`}</h5>
        <button disabled={numeroStock <= 0} onClick={() => {
          aumento()
          handleActualizar()
        }}>{numeroStock > 0 ? 'COMPRAR':'SIN STOCK'}</button>
      </div>
    )
  }
  
  /*(e) => {
          aumento()
          handleRetirar()
        } 
        
        /*{numeroStock === 0 && <button onClick={handleRetirar}>Sin Stock</button>}*/
  //{numeroStock === 0 && <button onClick={handleRetirar}>Sin Stock</button>}