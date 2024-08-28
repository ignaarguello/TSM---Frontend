import React from 'react'

//Estilos
import '../../styles/TaskBox.css'

//Data
import data_task from '../../data/data-task'

export default function TaskBox() {
    return (
        <div id='Contenedor-General_TaskBox'>
            {
                data_task.map((elem, index) =>
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
