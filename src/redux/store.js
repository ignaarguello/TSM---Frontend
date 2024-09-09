import { configureStore } from '@reduxjs/toolkit';
import root_reducer from "./reducers/RootReducer";

export const store = configureStore({
    reducer: root_reducer,
});