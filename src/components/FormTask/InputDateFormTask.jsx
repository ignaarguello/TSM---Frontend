import React from 'react'

//Estilos
import '../../styles/InputDateFormTask.css'

//Hooks
import { useState, useRef, useContext } from 'react'

//Context
import DataTaskContext from '../../context/DataTaskContext';


//Componente Input Date
export default function TextAreaFormTask() {
  //Estado de Fecha Seleccionada por el Input
  const [SelectedDate, setSelectedDate] = useState('')

  //Variables traidas del Context - (Data Task Context)
  const { date, setDate } = useContext(DataTaskContext)

  return (
    <div id='Contenedot-TextArea_IDFT'>
      <input type='datetime-local' onChange={handleSelectedDate} value={SelectedDate} id='InputDate_IDFT' />
    </div>

  )
}
