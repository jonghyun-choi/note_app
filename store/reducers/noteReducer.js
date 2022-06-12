import { addNote, deleteNote, updateNote } from '../actions/noteActions'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    notes : []
}

const noteReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addNote, (state, action) => {
            state.notes.push(action.payload);
        })
        .addCase(deleteNote, (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        })
});

export default noteReducer;