import React from 'react'

//Estilos
import '../../styles/InputDateFormTask.css'

//Hooks
import { useState } from 'react'

//MUI - Material MUI
import Button from '@mui/material/Button';



//Componente Input Date
export default function TextAreaFormTask() {
  const [FechaSeleccionada, setFechaSeleccionada] = useState('')

  const handleFechaSeleccionada = (event) => {
    setFechaSeleccionada(event.target.value)
  }

  const FechaFinal = (FechaSeleccionada.split('-').reverse().join('-'))



  return (
    <div id='Contenedot-TextArea_IDFT'>
      <input type="date" value={FechaSeleccionada} onChange={handleFechaSeleccionada} id='InputDate_IDFT' />
      <Button variant="contained" id='ButtonCreate-MUI_IDFT'>Create</Button>
    </div>

  )
}
