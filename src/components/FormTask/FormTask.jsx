import React from 'react'
import '../../styles/FormTask.css'

//Components
import InputFormTask from './InputFormTask'
import InputDateFormTask from './InputDateFormTask'

//MUI - Material MUI
import Button from '@mui/material/Button';

//Context
import DataTaskProvider from '../../providers/DataTaskProvider'

//Componente Formulario Padre
export default function FormTask() {
    return (
        <DataTaskProvider>
            <div id='Contenedor-General_FormTask'>
                <InputFormTask />
                <InputDateFormTask />
                <Button variant="contained" id='ButtonCreate-MUI_IDFT'>Create</Button>
            </div>
        </DataTaskProvider>
    )
}
