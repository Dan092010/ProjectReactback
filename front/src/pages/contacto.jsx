import '../assets/css/contact.scss';
import React, { useState } from 'react';
import { FormContext } from '../components/Formularios/FormContext';



function Contacto() {
	const [formData, setFormData] = useState({});

	const validarFormulario = (event) => {

		setFormData({
			nombre: event.target.nombre.value,
			email: event.target.email.value,
			comentarios: event.target.comentarios.value,
		});

		console.log(setFormData);

		event.preventDefault();
	}
	
	return (
	<div>		
		<FormContext.Provider value={{ formData, setFormData }}>

			<form className="form"name="formulario" action='/formulario' method='POST' onSubmit={validarFormulario}>
					<h1>Completa el formulario</h1>
				
				<div className="form-group" >
					<label htmlFor="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre" required minLength="3" pattern="^[a-zA-Z\s]*$"/>
				</div>

				<div className="form-group" >
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" name="email" required/>
				</div>

				<div className="form-group" >
					<label htmlFor="comentarios">Comentarios:</label>
					<textarea id="comentarios" name="comentarios" maxLength="150"></textarea>
				</div>

				<button>Enviar</button>
			</form>
		</FormContext.Provider>
	</div>
  );
}

export default Contacto;
