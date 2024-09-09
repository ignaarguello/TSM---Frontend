// Actions de las Tareas, aqui obtendremos la data, crearemos, actualizaremos y eliminaremos, manejando el crud desde aqui

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Importacion de la url del backend - Desarrollo o Produccion
import { BACK_URL } from '../../Api/Api'

//? Action - GET
const get_data_task = createAsyncThunk('get_data_task', async () => {
    try {
        const responde = await axios.get(`${BACK_URL}/todo`)
        const headersData = {
            contentType: responde.headers['content-type'],
            contentLength: responde.headers['content-length'],
        };
        return {
            data: responde.data,
            headers: headersData,
        };
    } catch (error) {
        console.log('Error ocurrido:', error)
    }
})

//? Action - POST
const post_new_task = createAsyncThunk('post_new_task', async (data) => {
    try {
        const responde = await axios.post(`${BACK_URL}/todo`, data)
        return responde
    } catch (error) {
        console.log('Error ocurrido:', error)
    }
})


const task_actions = {
    get_data_task,
    post_new_task,
}

export default task_actions