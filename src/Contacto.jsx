import React from "react";

class Contacto extends React.Component {
	render() {
		const { nombre, apellido, email, conectado } = this.props;

		return (
			<div>
				<h2>Información de contacto:</h2>
				<p>Nombre: {nombre}</p>
				<p>Apellido: {apellido}</p>
				<p>Email: {email}</p>
				<p>Estado de conexión: {conectado ? "Conectado" : "Desconectado"}</p>
			</div>
		);
	}
}

export default Contacto;
