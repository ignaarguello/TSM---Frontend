import { useState } from 'react'

//Icons y Libs
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'

//Components
import FormTask from '../FormTask/FormTask'

//Context
import ModalContext from '../../context/ModalContext'

//Hooks
import { useContext } from 'react'

export default function Modal(props) {
    const { isOpen, setIsOpen } = useContext(ModalContext)

    const CloseModal = () => { isOpen ? setIsOpen(false) : !isOpen ? setIsOpen(true) : pass }

    return (
        <Dialog open={isOpen} onClose={CloseModal} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white/5 px-4 pb-4 pt-5 sm:p-6 sm:pb-4" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <PlusIcon aria-hidden="true" className="h-6 w-6 text-green-600" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-medium leading-6 text-green-700 lg:mt-2">
                                        New Task
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 flex flex-col gap-2">
                                            <span><b>Master your to-do list!</b> Describe your new task and choose its <b>urgency level</b> to prioritize your actions. Turn your ideas into reality and make a difference!.</span>
                                        </p>
                                    </div>
                                    {/* Contenedor de los Input */}
                                    <div className='h-52'>
                                        <FormTask />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div >
        </Dialog >
    )
}
