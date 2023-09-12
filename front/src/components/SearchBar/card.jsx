import React from "react";

const Card = ({ val }) => {
  return (
    <div id={val.id} className="cards-container">
      <div href="#" className="card">
        <article className="card__article">
          <div className="card__image-container">
            <img className="card__image" src={val.imagen} alt={val.titulo} />
          </div>
          <div className="card__content">
            <h2 className="card__heading">{val.titulo}</h2>
            <div className="card__description">
              <p>{val.descripcion}</p>
              <a className="ima" href={val.linkCompra}>
                {val.precio}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
