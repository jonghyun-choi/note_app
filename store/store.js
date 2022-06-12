import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import noteReducer from './reducers/noteReducer'

export const store = configureStore({
    reducer : { notes : noteReducer },
});

export const wrapper = createWrapper(() => store);