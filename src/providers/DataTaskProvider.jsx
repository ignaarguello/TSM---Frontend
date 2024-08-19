import { useState } from "react";
import DataTaskContext from "../context/DataTaskContext";

function DataTaskProvider({ children }) {
    const [name, setName] = useState(undefined)
    const [date, setDate] = useState(undefined)

    return (
        <DataTaskContext.Provider value={{ name, setName, date, setDate }}>
            {children}
        </DataTaskContext.Provider>
    )
}

export default DataTaskProvider