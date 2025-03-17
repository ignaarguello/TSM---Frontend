import OpenCloseIcon from '../OpenCloseIcon/OpenCloseIcon'
import Modal from './Modal'

//Provider
import ModalProvider from '../../providers/ModalProvider'

//Hooks
import { useState } from 'react'

import '../../styles/FormModal.css'

export default function FormModal() {
    return (
        <ModalProvider>

            {/* Estructura JSX */}
            <section id='ContenedorGeneral_FormModal'>
                <OpenCloseIcon />
                <Modal />
            </section>

        </ModalProvider>
    )
}
