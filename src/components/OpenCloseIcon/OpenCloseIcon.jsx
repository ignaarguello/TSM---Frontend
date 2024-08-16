import '../../styles/OpenCloseIcon.css'

//Hooks
import { useState, useContext } from 'react';

//Context
import ModalContext from '../../context/ModalContext';

export default function OpenCloseIcon(props) {
    const { isOpen, setIsOpen } = useContext(ModalContext)
    const ShowModal = () => { !isOpen ? setIsOpen(true) : isOpen ? setIsOpen(false) : pass }

    return (
        <div id='ContenedorOpenCloseIcon' onClick={ShowModal}>
            <svg id='CloseIcon_OCI' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
    )
}


