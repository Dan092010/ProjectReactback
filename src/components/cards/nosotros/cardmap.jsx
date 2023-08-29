import React from 'react';
import Info from './info';

const CardMap = () => {

  const [cards, setCards] = React.useState([])

  React.useEffect(() => {

    obtenerCards()

  }, [])

  const obtenerCards = async () => {
    const data = await fetch('/data.json')
    const view = await data.json()
    setCards(view)
  }

  
  return (
    <div>
      {cards.map((product) => (
        <Info
          key={product.id}
          id={product.id}
          titulo={product.titulo}
          descripcion={product.descripcion}
          imagen={product.imagen}
        />
      ))}
    </div>
  );
}

export default CardMap;
