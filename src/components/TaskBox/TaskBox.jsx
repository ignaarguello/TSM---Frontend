import React from 'react'

//Hooks
import { useState, useEffect } from 'react'

//Estilos
import '../../styles/TaskBox.css'

//Data Estatica
import data_task from '../../data/data-task'

//Redux / Actions
import { useDispatch, useSelector } from 'react-redux'
import task_actions from '../../redux/actions/TaskActions'

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
            <section id='Contenedor-1_TaskBox'>
                <section>
                    <h1 id='Titulo-TaskManagement__TaskBox'>Task Management</h1>
                </section>
            </section>
            <section id='Contenedor-2_TaskBox'>
                {
                    AllTask?.data?.map((elem, index) =>
                        <div key={index} className='TaskContenedor_TaskBox bg-zinc-800'>
                            <span id='Name_TaskBox'>{elem.name}</span>
                            <span id='Type_TaskBox'>{elem.type}</span>
                            <span id='Date_TaskBox'>{elem.date}</span>
                        </div>
                    )
                }
            </section>
        </div>
    )
}
