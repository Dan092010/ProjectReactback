import '../assets/css/contact.scss';


function Contacto() {
  return (
	<div>		
		<form className="form"name="formulario" onSubmit="return validarFormulario()">
				<h1>Completa el formulario</h1>
			
			<div className="form-group">
				<label htmlFor="nombre">Nombre:</label>
				<input type="text" id="nombre" name="nombre" required minLength="3" pattern="^[a-zA-Z\s]*$"/>
			</div>

			<div className="form-group">
				<label htmlFor="email">Email:</label>
				<input type="text" id="email" name="email" required/>
			</div>

			<div className="form-group">
				<label htmlFor="comentarios">Comentarios:</label>
				<textarea id="comentarios" name="comentarios" maxLength="150"></textarea>
			</div>

			<button>Enviar</button>
		</form>
	</div>
  );
}

export default Contacto;
