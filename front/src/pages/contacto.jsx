import '../assets/css/contact.scss';
import React, { useState } from 'react';
import { FormContext } from '../components/Formularios/FormContext';
import axios from 'axios'; // Importa Axios



function Contacto() {
	const [formData, setFormData] = useState({});

	const validarFormulario = (event) => {

		setFormData({
			nombre: event.target.nombre.value,
			email: event.target.email.value,
			comentarios: event.target.comentarios.value,
		});
		console.log(setFormData);
		const response =  axios.post('http://localhost:5000/api/formulario', formData);
		console.log(response);	
		event.preventDefault();
	}
	
	return (
	<div>		
		<FormContext.Provider value={{ formData, setFormData }}>

			<form className="form"name="formulario" onSubmit={validarFormulario}>
					<h1>Completa el formulario</h1>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre" required minLength="3" pattern="^[a-zA-Z\s]*$"/>
				</div>

				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" name="email" required/>
				</div>

				<div className="form-group" onSubmit={validarFormulario}>
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
