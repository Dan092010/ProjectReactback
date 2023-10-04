import '../assets/css/alta.scss';
import { FormContext } from '../components/Formularios/FormContext';
import React, { useState } from 'react';
import axios from 'axios'; 



function Alta() {
	
	const [formData, setFormData] = useState({});


	const validarFormulario = (event) =>{
		event.preventDefault();
		setFormData({
			nombre: event.currentTarget.nombre.value,
			precio: event.currentTarget.precio.value,
			stock: event.currentTarget.stock.value,
			marca: event.currentTarget.marca.value,
			categoria: event.currentTarget.categoria.value,
			descripcionCorta: event.currentTarget["descripcion-corta"].value,
			descripcionLarga: event.currentTarget["descripcion-larga"].value,
			envioSinCargo: event.currentTarget["envio-sin-cargo"].checked,
			foto: event.currentTarget.foto.files[0],
  		});
		console.log(formData);
		const response =  axios.post('http://localhost:5000/api/form', formData);
		console.log(response);	
		event.preventDefault();
	};
	

  
	return (
	<div>
		<FormContext.Provider value={{ formData, setFormData }}>
		
			<form className="formProduct"name="formProduct"onSubmit={validarFormulario}>

				<div className="form-group">
					<label htmlFor="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre" required />
				</div>
				
				<div className="form-group" >
					<label htmlFor="precio">Precio:</label>
					<input type="number" id="precio" name="precio" step="0.01" required />
				</div>
				
				<div className="form-group" >
					<label htmlFor="stock">Stock:</label>
					<input type="number" id="stock" name="stock" required />
				</div>
				
				<div className="form-group" >
					<label htmlFor="marca">Marca:</label>
					<input type="text" id="marca" name="marca" required />
				</div>
				
				<div className="form-group" >
					<label htmlFor="categoria">Categoría:</label>
					<input type="text" id="categoria" name="categoria" required />
				</div>
				
				<div className="form-group" >
					<label htmlFor="descripcionCorta">Descripción corta:</label>
					<input type="text" id="descripcion-corta" name="descripcion-corta" maxLength="50" required />
				</div>
				
				<div className="dif">
					<label htmlFor="descripcionLarga">Descripción larga:</label>
					<textarea id="descripcion-larga" name="descripcion-larga" rows="2" cols="50"></textarea>
				</div>
				
				<div className="form-group" >
					<label htmlFor="envioSinCargo">Envío sin cargo:</label>
					<input type="checkbox" id="envio-sin-cargo" name="envio-sin-cargo" />
				</div>
				
				<div className="form-group" >
					<label htmlFor="foto">Foto:</label>
					<input type="file" id="foto" name="foto" />
				</div>

				<button>Enviar</button>

			</form>
	    </FormContext.Provider>
	</div>
  
  	);
}

export default Alta;
