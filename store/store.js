import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import notesReducer from './reducers/notesReducer'

export const store = configureStore({
    reducer : { 
        notes : notesReducer
    },
});

export const wrapper = createWrapper(() => store);