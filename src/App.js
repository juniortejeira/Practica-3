import React, { useState } from 'react';
import ComponenteInput from "./componentes/validacion"
import './App.css';

function App() {
	const [nombre, cambiarNombre] = useState({ campo: '', validacion: null }); //estamos llamando a campo('') y validacion (null) como estado inicial
	const [apellido, cambiarApellido] = useState({ campo: '', validacion: null });
	const [cedula, cambiarCedula] = useState({ campo: '', validacion: null });
	const [edad, cambiarEdad] = useState({ campo: '', validacion: null });
	const [correo, cambiarCorreo] = useState({ campo: '', validacion: null });
	const [telefono, cambiarTelefono] = useState({ campo: '', validacion: null });
	const [barrio, cambiarBarrio] = useState({ campo: '', validacion: null });
	const [ciudad, cambiarCiudad] = useState({ campo: '', validacion: null });
	const [profesion, cambiarProfesion] = useState({ campo: '', validacion: null });
	const [lugartrabajo, cambiarLugartrabajo] = useState({ campo: '', validacion: null });
	const [formularioValido, cambiarFormularioValido] = useState(null);


	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,35}$/, // Letras y espacios, pueden llevar acentos.
		apellido: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos
		cedula: /^\d{8}$/, //8 numeros.
		// edad: /^\d{8}$/, //8 numeros.                                               //selector (despues)
		//password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{9}$/, //9 numeros.
		barrio: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,
		ciudad: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
		//profesion: /^[a-zA-ZÀ-ÿ\s]{1,100}$/,                                        //selector (despues)
		lugartrabajo: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	}

	const onSumbit = (events) => { //evita que recarge la pagina al enviar el formulario
		events.preventDefault();

		//solo recarga cuando se cumple todas las condiciones
		if (
			nombre.valido === 'true' &&
			apellido.valido === 'true' &&
			cedula.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			barrio.valido === 'true' &&
			ciudad.valido === 'true' &&
			lugartrabajo.valido === 'true'

		) {//cambia el valor de (valido) 
			cambiarFormularioValido(true);
			cambiarNombre({ campo: '', valido: '' });
			cambiarApellido({ campo: '', valido: null });
			cambiarCedula({ campo: '', valido: null });
			cambiarCorreo({ campo: '', valido: null });
			cambiarTelefono({ campo: '', valido: null });
			cambiarBarrio({ campo: '', valido: null });
			cambiarCiudad({ campo: '', valido: null });
			cambiarLugartrabajo({ campo: '', valido: null });

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

	return (
		<main>
			<form action="" onSubmit={onSumbit}>

				<ComponenteInput
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Jhon"
					name="Nombre"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.nombre}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>

				<ComponenteInput
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Cena"
					name="Apellido"
					leyendaError="No podrá tener una extensión de más de 30 caracteres, tampoco podrá tener 
          números, ni estar vacío"
					expresionRegular={expresiones.apellido}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>

				<ComponenteInput
					estado={cedula}
					cambiarEstado={cambiarCedula}
					tipo="text"
					label="Cedula"
					placeholder="56663331"
					name="Cedula"
					leyendaError="Podrá contener solamente números. No se aceptan puntos 
          ni guiones. Deberá tener una extensión de 8 caracteres."
					expresionRegular={expresiones.cedula}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>
				<ComponenteInput
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="text"
					label="Correo"
					placeholder="correo@correo.com"
					name="Correo"
					leyendaError="El correo no puede contener espacio ni mayusculas"
					expresionRegular={expresiones.correo}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>

				<ComponenteInput
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Telefono"
					placeholder="0999333666"
					name="Telefono"
					leyendaError="Debe contener 9 digitos"
					expresionRegular={expresiones.telefono}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>

				<ComponenteInput
					estado={barrio}
					cambiarEstado={cambiarBarrio}
					tipo="text"
					label="Barrio"
					placeholder="Tres Cruces"
					name="Barrio"
					leyendaError="Deberá contener solamente letras"
					expresionRegular={expresiones.barrio}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>

				<ComponenteInput
					estado={ciudad}
					cambiarEstado={cambiarCiudad}
					tipo="text"
					label="Ciudad"
					placeholder="springfield"
					name="Ciudad"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.ciudad}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>


				<ComponenteInput
					estado={lugartrabajo}
					cambiarEstado={cambiarLugartrabajo}
					tipo="text"
					label="Lugartrabajo"
					placeholder="Matea"
					name="Lugartrabajo"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.lugartrabajo}//expresion lo importamos, es una validacion de que todos los estados sean 'true'
				/>



				{/*  {formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					{formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
				</ContenedorBotonCentrado>
			*/}
				<select>
					<option>Programador</option>
					<option>Tester</option>
				</select>

				{formularioValido === false && <div className='MensajeError'>
					<p>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</div>}
				<div className='ContenedorBotonCentrado'>
					<button type="submit">Enviar</button>
					{formularioValido === true && <div className='MensajeError'>Formulario enviado exitosamente!</div >}
				</div>

			</form>
		</main>

	)










}

export default App;
