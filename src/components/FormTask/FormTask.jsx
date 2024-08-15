import React from 'react'
import '../../styles/FormTask.css'
import InputFormTask from './InputFormTask'
import TextAreaFormTask from './TextAreaFormTask'

//Componente Formulario Padre
export default function FormTask() {
    return (
        <div id='Contenedor-General_FormTask'>
            <InputFormTask />
            <TextAreaFormTask />
        </div>
    )
}
