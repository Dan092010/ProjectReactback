import React, { useEffect, useState } from 'react';
import Info from './info';
import products from './data.json';

function CardMap() {

  fetch('/data.json')
  	.then(response => response.json())
	.then(data => {
		console.log(data.result)
	});
  return (
    <div>
      {products.map((product) => (
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
