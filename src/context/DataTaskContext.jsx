import { createContext, useState } from "react";

const DataTaskContext = createContext({
    name: undefined,
    date: undefined,
    setName: () => { },
    setDate: () => { },
})

export default DataTaskContext