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
    let dispatch = useDispatch()
    const { AllTask } = useSelector(store => store.task)
    const { get_data_task } = task_actions

    useEffect(() => {
        dispatch(get_data_task())
    }, [])


    return (
        <div id='Contenedor-General_TaskBox'>
            {
                AllTask?.data?.map((elem, index) =>
                    <div key={index} className='TaskContenedor_TaskBox bg-zinc-800'>
                        <span id='Name_TaskBox'>{elem.name}</span>
                        <span id='Type_TaskBox'>{elem.type}</span>
                        <span id='Date_TaskBox'>{elem.date}</span>
                    </div>
                )
            }
        </div>
    )
}
