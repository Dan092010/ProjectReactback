import React from 'react'

function Info (props){
  return(
    <div id={props.id} >
	<div className="us">
		<div className="foto">
			<img className="card__image" src={props.imagen} alt={props.titulo} />
		</div>
		<div className="pie">
			<p>{props.titulo}</p>
		</div>
		<div className="capa">
			<h3>{props.descripcion}</h3>
		</div>
	</div>
    </div>   
  )
}

export default Info;
