import '../assets/css/alta.scss';
import { FormContext } from '../components/Formularios/FormContext';
import React, { useState, useContext } from 'react';


function Alta() {
	
	const [formData, setFormData] = useState({});

	const validarFormulario = (event) =>{
		setFormData({
			nombre: event.target.nombre.value,
			precio: event.target.precio.value,
			stock: event.target.stock.value,
			marca: event.target.marca.value,
			categoria: event.target.categoria.value,
			descripcionCorta: event.target["descripcion-corta"].value,
			descripcionLarga: event.target["descripcion-larga"].value,
			envioSinCargo: event.target["envio-sin-cargo"].checked,
			edadDesde: event.target["edad-desde"].value,
			edadHasta: event.target["edad-hasta"].value,
			foto: event.target.foto.files[0],
  		});

		event.preventDefault();
	};
	

  
	return (
	<div>
		<FormContext.Provider value={{ formData, setFormData }}>
		
			<form className="formProduct"name="formProduct">

				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre" required />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="precio">Precio:</label>
					<input type="number" id="precio" name="precio" step="0.01" required />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="stock">Stock:</label>
					<input type="number" id="stock" name="stock" required />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="marca">Marca:</label>
					<input type="text" id="marca" name="marca" required />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="categoria">Categoría:</label>
					<input type="text" id="categoria" name="categoria" required />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="descripcionCorta">Descripción corta:</label>
					<input type="text" id="descripcion-corta" name="descripcion-corta" maxLength="50" required />
				</div>
				
				<div className="dif" onSubmit={validarFormulario}>
					<label htmlFor="descripcionLarga">Descripción larga:</label>
					<textarea id="descripcion-larga" name="descripcion-larga" rows="2" cols="50"></textarea>
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="envioSinCargo">Envío sin cargo:</label>
					<input type="checkbox" id="envio-sin-cargo" name="envio-sin-cargo" />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
					<label htmlFor="edadDesde">Edad desde:</label>
					<input type="number" id="edad-desde" name="edad-desde" required />
				</div>
			
				<div className="dif" onSubmit={validarFormulario}>
					<label htmlFor="edadHasta">Edad hasta:</label>
					<input type="number" id="edad-hasta" name="edad-hasta" required />
				</div>
				
				<div className="form-group" onSubmit={validarFormulario}>
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
