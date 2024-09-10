import React from 'react'
import '../../styles/FormTask.css'

//MUI - Material MUI
import Button from '@mui/material/Button';

//Hooks
import { useState, useEffect } from 'react';

//Context
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import task_actions from '../../redux/actions/TaskActions'


//Componente Formulario Padre
export default function FormTask() {
    //Variables de Redux
    const dispatch = useDispatch()


    //Variables del Contexto - Para cerrar el modal
    const { isOpen, setIsOpen } = useContext(ModalContext)
    const {post_new_task} = task_actions

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

    //? Funcion encargada de enviar la data extraida del formulario modal
    const SetDataFinal = () => {
        console.log(ModelData)
        setIsOpen(false)
        dispatch(post_new_task(ModelData))
    }

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
            <Button type='click' onClick={SetDataFinal} id='ButtonCreate-MUI_IDFT'>Create</Button>
        </div>
    )
}
