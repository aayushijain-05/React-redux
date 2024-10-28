import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

import { notesReducer } from '../reducers/notesReducer'

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        notes:notesReducer
    }
})