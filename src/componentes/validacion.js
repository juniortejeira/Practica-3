import App from "../App";
import React from "react";
import '../App.css';


const ComponenteInput = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular }) => {

    const onChange = (e) => {//ingresar a todos '...' los campos 'estado' y obtener el valor
        cambiarEstado({ ...estado, campo: e.target.value });//campo tiene un parametro que trae al valor del objeto
        //preguntar por el target========================
    }

    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {//le estamos pidiendo que verifique 'estado.campo'
                //const estado = { campo: '', validacion: null }
                cambiarEstado({ ...estado, valido: 'true' }) //acceder a todos los estados(App.js) y cambiarle el valor de 'null' a 'true'
            }
            else {
                cambiarEstado({ ...estado, valido: 'false' })//acceder a todos los estados(App.js) y cambiarle el valor de 'null' a 'false'
            }
        }

    }

    return (
        <div>
            <label htmlFor="name" valido={estado.valido}>{label}</label>
            <div className="GrupoInput ">
                <input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <div className="LeyendaError" valido={estado.valido}>{leyendaError}</div>
            </div>
        </div>
    )
}







export default ComponenteInput;