import { createContext, useState } from "react";

const ModalContext = createContext({
    isOpen: false,
    setIsOpen: () => { },
})

export default ModalContext;