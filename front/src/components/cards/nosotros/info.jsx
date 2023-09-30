import React from 'react';

function Info({ id, titulo, descripcion, imagen }) {
  return (
    <div id={id}>
      <div className="us">
        <div className="foto">
          <img className="card__image" src={imagen} alt={titulo} />
        </div>
        <div className="pie">
          <p>{titulo}</p>
        </div>
        <div className="capa">
          <h3>{descripcion}</h3>
        </div>
      </div>
    </div>
  );
}

export default Info;