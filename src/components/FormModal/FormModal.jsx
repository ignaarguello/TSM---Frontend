import OpenCloseIcon from '../OpenCloseIcon/OpenCloseIcon'
import Modal from './Modal'

//Provider
import ModalProvider from '../../providers/ModalProvider'

//Hooks
import { useState } from 'react'

export default function FormModal() {

    return (
        <ModalProvider>
                <OpenCloseIcon />
                <Modal />
        </ModalProvider>
    )
}
