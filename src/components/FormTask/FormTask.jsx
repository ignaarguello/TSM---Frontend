import React from 'react'
import '../../styles/FormTask.css'
import InputFormTask from './InputFormTask'
import InputDateFormTask from './InputDateFormTask'

//Componente Formulario Padre
export default function FormTask() {
    return (
        <div id='Contenedor-General_FormTask'>
            <InputFormTask />
            <InputDateFormTask />
        </div>
    )
}
