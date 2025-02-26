import React from 'react'

//Hooks
import { useState, useEffect } from 'react'

//Estilos
import '../../styles/TaskBox.css'

//Data Estatica
import data_task from '../../data/data-task'

//Redux / Actions
import { useDispatch, useSelector } from 'react-redux'

//Componentes
import task_actions from '../../redux/actions/TaskActions'
import NavbarTaskBox from './NavbarTaskBox'

export default function TaskBox() {
    //Dispatch y llamadas al store + Actions
    const dispatch = useDispatch()
    const { AllTask, NewTask } = useSelector(store => store.task)
    const { get_data_task } = task_actions

    // Hook encargado de actualizar la interfaz y realizar la peticion GET al Backend
    useEffect(() => {
        dispatch(get_data_task())
    }, [NewTask])

    return (
        <div id='Contenedor-General_TaskBox'>
           <NavbarTaskBox/>
        </div>
    )
}
