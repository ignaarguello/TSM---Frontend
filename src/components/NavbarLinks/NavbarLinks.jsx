import React from 'react'

//Estilos
import '../../styles/NavbarLinks.css'

//Hooks
import { useState } from 'react';

//Data Links
const Datalinks = ['Completadas', 'En Proceso']


export default function NavbarLinks() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };
    return (
        <div id='ContenedorPrincipal__NavbarLinks'>
            <ul id='ListaContenedoraDeLinks__NavbarLinks'>
                {Datalinks.map((elem, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                    >
                        <h2
                            className={selectedIndex === index ? 'ItemSeleccionado__NavbarLinks' : ''} // Agregamos la clase condicional
                        >
                            {elem}
                        </h2>
                    </div>
                ))}
            </ul>
        </div>
    )
}
