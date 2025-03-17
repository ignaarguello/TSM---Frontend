import React from 'react'

//Estilos
import '../../styles/NavbarTaskBox.css'

export default function NavbarTaskBox() {
    return (
        <div id='ContenedorGeneral_NavbarTaskBox'>
            <h2 id='TituloTask_NavbarTaskBox'>Tasks</h2>
            <div id='BotonesDeInteraccion_NavbarTaskBox'>
                <button id='BotonCrear_NavbarTaskBox'>Nueva Tarea</button>
            </div>
        </div>
    )
}
