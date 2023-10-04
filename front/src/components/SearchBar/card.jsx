import React, { useState } from "react";





const Card = ({ val }) => {

   

  function funcionClick(){

    alert("El carro seleccionado es " +  val.titulo)


  }

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
              <a className="ima" href={val.linkCompra} onClick={funcionClick} > {val.precio} </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};



 export default Card;
