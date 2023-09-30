import React, { useState, useEffect } from 'react';
import Info from './info';
import axios from 'axios';

const CardMap = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    obtenerCards();
  }, []);

  const obtenerCards = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cardNos');
      setCards(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error al obtener las tarjetas:', error);
    }
  };

  return (
    <div>
      {cards.map((card) => (
        <Info
          key={card.id}
          id={card.id}
          titulo={card.titulo}
          descripcion={card.descripcion}
          imagen={card.imagen}
        />
      ))}
    </div>
  );
};

export default CardMap;