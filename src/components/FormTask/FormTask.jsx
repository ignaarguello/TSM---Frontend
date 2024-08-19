import React from 'react'
import '../../styles/FormTask.css'

//MUI - Material MUI
import Button from '@mui/material/Button';

//Hooks
import { useRef } from 'react';


//Componente Formulario Padre
export default function FormTask() {
    const NameRef = useRef()
    const DateRef = useRef()

    const CollectedData = {
        name: NameRef?.current?.value,
        date: DateRef?.current?.value,
    }

    const SendData = (event) => {
        event.preventDefault()
    }

    return (
        <div id='Contenedor-General_FormTask'>
            <form onSubmit={SendData}>
                <input type="text" name="name-task-input" id="Name-Task-Input_IFT" placeholder='Task Name' ref={NameRef} />
                <input type='datetime-local' id='InputDate_IDFT' ref={DateRef} />
                <Button type='submit' variant="contained" id='ButtonCreate-MUI_IDFT'>Create</Button>
            </form>
        </div>
    )
}
