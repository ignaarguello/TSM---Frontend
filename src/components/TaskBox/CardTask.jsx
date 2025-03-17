import React from 'react'

//Estilos
import '../../styles/CardTask.css'

//Hooks
import { useEffect } from 'react'

//Redux / Actions
import { useDispatch, useSelector } from 'react-redux'

//Action Redux
import task_actions from '../../redux/actions/TaskActions'


export default function CardTask() {
    //Dispatch y llamadas al store + Actions
    const dispatch = useDispatch()
    const { get_data_task } = task_actions
    const { AllTask, NewTask } = useSelector(store => store.task)


    // Hook encargado de actualizar la interfaz y realizar la peticion GET al Backend
    useEffect(() => {
        dispatch(get_data_task())
    }, [NewTask])

    return (
        <div id='ContenedorGeneral_CardTask'>
            {
                AllTask.data?.map((elem, index) =>
                    <div id='ContenedorIndividual_CardTask'>
                        <h4 className='ItemTask_CardTask'>{elem.name}</h4>
                        <h4 className='ItemTask_CardTask'>{elem.type}</h4>
                        <h4 className='ItemTask_CardTask'>{elem.date}</h4>
                        <h4
                            className='ItemTask_CardTask'
                            style={{ color: elem.done ? 'green' : 'orange' }}
                        >
                            {elem.done ? 'Completada' : 'Incompleta'}
                        </h4>
                    </div>
                )
            }
        </div>
    )
}
