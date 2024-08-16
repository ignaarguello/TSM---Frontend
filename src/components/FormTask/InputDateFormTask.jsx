import React from 'react'
import '../../styles/InputDateFormTask.css'

import { useState } from 'react'

export default function TextAreaFormTask() {
  const [FechaSeleccionada, setFechaSeleccionada] = useState('')

  const handleFechaSeleccionada = (event) => {
    setFechaSeleccionada(event.target.value)
  }

  const FechaFinal = (FechaSeleccionada.split('-').reverse().join('-'))

  return (
    <div id='Contenedot-TextArea_TAFT'>
      {/* <textarea name="description-task" id="TextArea_TAFT" placeholder='Annotations'></textarea> */}
      <label for="fechaNacimiento">Task Date:</label>
      <input type="date" value={FechaSeleccionada} onChange={handleFechaSeleccionada} id='InputDate' />
    </div>
  )
}
