import React from 'react'

//Styles
import '../../styles/InputFormTask.css'

//Hooks
import { useContext } from 'react'

//Context
import DataTaskContext from '../../context/DataTaskContext'

//Input del Formulario - Recibira Props y sera reutilizable
export default function InputFormTask() {
    const { name, setName } = useContext(DataTaskContext)

    const SetTaskName = (event) => {
        setName(event.target.value)

    }

    return (
        <div id='Contenedor-Input_IFM'>
            <input type="text" /* s */ name="name-task-input" id="Name-Task-Input_IFT" placeholder='Task Name' />
        </div>
    )
}
