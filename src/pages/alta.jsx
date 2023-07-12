import '../assets/css/alta.scss';

function Alta() {
  return (
	<div>		
		<form className="formProduct"name="formProduct">

			<div className="form-group">
				<label htmlFor="nombre">Nombre:</label>
				<input type="text" id="nombre" name="nombre" required />
			</div>
			
			<div className="form-group">
				<label htmlFor="precio">Precio:</label>
				<input type="number" id="precio" name="precio" step="0.01" required />
			</div>
			
			<div className="form-group">
				<label htmlFor="stock">Stock:</label>
				<input type="number" id="stock" name="stock" required />
			</div>
			
			<div className="form-group">
				<label htmlFor="marca">Marca:</label>
				<input type="text" id="marca" name="marca" required />
			</div>
			
			<div className="form-group">
				<label htmlFor="categoria">Categoría:</label>
				<input type="text" id="categoria" name="categoria" required />
			</div>
			
			<div className="form-group">
				<label htmlFor="descripcionCorta">Descripción corta:</label>
				<input type="text" id="descripcion-corta" name="descripcion-corta" maxLength="50" required />
			</div>
			
			<div className="dif">
				<label htmlFor="descripcionLarga">Descripción larga:</label>
				<textarea id="descripcion-larga" name="descripcion-larga" rows="2" cols="50" required></textarea>
			</div>
			
			<div className="form-group">
				<label htmlFor="envioSinCargo">Envío sin cargo:</label>
				<input type="checkbox" id="envio-sin-cargo" name="envio-sin-cargo" />
			</div>
			
			<div className="form-group">
				<label htmlFor="edadDesde">Edad desde:</label>
				<input type="number" id="edad-desde" name="edad-desde" required />
			</div>
		
			<div className="dif">
				<label htmlFor="edadHasta">Edad hasta:</label>
				<input type="number" id="edad-hasta" name="edad-hasta" required />
			</div>
			
			<div className="form-group">
				<label htmlFor="foto">Foto:</label>
				<input type="file" id="foto" name="foto" />
			</div>

			<button>Enviar</button>

		</form>
	</div>
  );
}

export default Alta;
