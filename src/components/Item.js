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
