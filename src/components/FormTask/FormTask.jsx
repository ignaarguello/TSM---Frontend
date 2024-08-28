import React from 'react'
import '../../styles/FormTask.css'

//MUI - Material MUI
import Button from '@mui/material/Button';

//Hooks
import { useState, useEffect } from 'react';


//Componente Formulario Padre
export default function FormTask() {
    //Variales de estado de los Input 
    const [name, setName] = useState()
    const [SelectedActive, setSelectedActive] = useState(null)

    //Variables que usamos para obtener el metodo/objeto - (Date)
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const FormattedDate = `${day}/${month}/${year}`

    //Modelo de data a enviar - (Nombre, Fecha, Tipo)
    const ModelData = { name: name, date: FormattedDate, type: SelectedActive }

    //Funcion set para el nombre de la task
    const SetName = (event) => setName(event.target.value)

    //Funcion encargada de la logica de enviar la data y Setear el Type 
    const handleTypeChange = (type) => {
        setSelectedActive(type);
    };

    //Componente Formulario para crear las Task - (Form Task)
    return (
        <div id='Contenedor-General_FormTask'>
            <section id='ContendorInputText_FT'>
                <input onInput={SetName} type="text" name="name-task-input" id="Name-Task-Input_IFT" placeholder='Task Name' />
            </section>
            <section id='ContenedorSelect_FT'>
                <div
                    onClick={() => handleTypeChange('Auto')}
                    className={`ItemSelect_FT ${SelectedActive === 'Auto' ? 'ItemSelected' : ''}`}
                    id='Select-Auto_FT'
                >
                    Auto
                </div>
                <div
                    onClick={() => handleTypeChange('Casa')}
                    className={`ItemSelect_FT ${SelectedActive === 'Casa' ? 'ItemSelected' : ''}`}
                    id='Select-Casa_FT'
                >
                    Casa
                </div>
            </section>
            <Button type='click' onClick={handleTypeChange} id='ButtonCreate-MUI_IDFT'>Create</Button>
        </div>
    )
}
