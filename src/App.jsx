import React from "react";
import Contacto from "./Contacto";
import CambiarEstado from "./CambiarEstado";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contacto: {
				nombre: "Juan",
				apellido: "Pérez",
				email: "juan@example.com",
				conectado: true,
			},
		};
	}

	cambiarEstado = () => {
		this.setState((prevState) => ({
			contacto: {
				...prevState.contacto,
				conectado: !prevState.contacto.conectado,
			},
		}));
	};

	render() {
		const { contacto } = this.state;

		return (
			<div>
				<Contacto {...contacto} />
				<CambiarEstado contacto={contacto} cambiarEstado={this.cambiarEstado} />
			</div>
		);
	}
}

export default App;
