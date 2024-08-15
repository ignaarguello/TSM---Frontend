import React from "react";
import { useState } from "react";

function useValidateCondicional(value) {
    const [valueState, setValueState] = useState(value)

    if (!valueState) {
        setValueState(true)
        console.log('Estado modificado')
    }
    if (valueState) {
        setValueState(false)
        console.log('Estado modificado')
    }

    return valueState
}

export default useValidateCondicional;