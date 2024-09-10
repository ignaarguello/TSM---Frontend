import { createReducer } from "@reduxjs/toolkit";

// Importacion de Actions y Desestructuracion
import task_actions from "../actions/TaskActions";
const { get_data_task, post_new_task } = task_actions

// Initial State
const initialState = {
    name: '',
    date: '',
    type: '',
    done: false,
    AllTask: [],
    NewTask: []
}

// Inicio del Task Reducer
const task_reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(get_data_task.fulfilled, (state, action) => {
            return {
                ...state,
                AllTask: action.payload
            }
        })
        .addCase(post_new_task.fulfilled, (state, action) => {
            return {
                ...state,
                NewTask: action.payload
            }
        })
})


export default task_reducer

