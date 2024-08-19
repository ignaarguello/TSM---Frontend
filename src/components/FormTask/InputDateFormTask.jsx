import React from 'react'

//Estilos
import '../../styles/InputDateFormTask.css'

//Hooks
import { useState } from 'react'

//MUI - Material MUI
import Button from '@mui/material/Button';



//Componente Input Date
export default function TextAreaFormTask() {
  //Estado de Fecha Seleccionada por el Input
  const [FechaSeleccionada, setFechaSeleccionada] = useState('')

  //Estado que modifica el 'type' del Input
  const [InputType, setInputType] = useState('text')

  //Funcion encargada de modificar el estado del Input - (Text - Date)
  const ChangeTypeInput = () => {
    setInputType(InputType === 'text' ? 'datetime-local' : 'text');
  }


  //Funcion de captura el valor del Input - (Date)
  const handleFechaSeleccionada = (event) => {
    setFechaSeleccionada(event.target.value)
  }

  //Funcion de evento para Boton (Create) que muestra la Fecha
  const ShowFormattedDate = () => {
    const Day = FechaSeleccionada.slice(0, 10).split('-').reverse().join('-')
    const Hour = FechaSeleccionada.slice(11)

    setFechaSeleccionada(`${Hour} - ${Day}`)
  }


  return (
    <div id='Contenedot-TextArea_IDFT'>
      <input type='datetime-local' value={FechaSeleccionada} placeholder="Task Date" onFocus={ChangeTypeInput} onBlur={ChangeTypeInput} onChange={handleFechaSeleccionada} id='InputDate_IDFT' />
      <Button variant="contained" id='ButtonCreate-MUI_IDFT' onClick={ShowFormattedDate}>Create</Button>
    </div>

  )
}
