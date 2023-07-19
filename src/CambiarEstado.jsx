import React from "react";

class CambiarEstado extends React.Component {
	render() {
		const { contacto, cambiarEstado } = this.props;

		return (
			<div>
				<h2>Cambiar estado de conexión:</h2>
				<p>
					Estado actual: {contacto.conectado ? "Conectado" : "Desconectado"}
				</p>
				<button onClick={cambiarEstado}>
					Cambiar estado a {contacto.conectado ? "Desconectado" : "Conectado"}
				</button>
			</div>
		);
	}
}

export default CambiarEstado;
