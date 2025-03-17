import React from 'react'

//Hooks
import { useState, useEffect } from 'react'

//Estilos
import '../../styles/TaskBox.css'

//Componentes
import NavbarTaskBox from './NavbarTaskBox'
import CardTask from './CardTask'

export default function TaskBox() {
    return (
        <div id='Contenedor-General_TaskBox'>
            <NavbarTaskBox />
            <section id='TotalTareas_TaskBox'></section>
            <CardTask />
        </div>
    )
}
