import { addNote, deleteNote, updateNote, selectNote } from '../actions/noteActions'
import { createReducer } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const initialState = {
    notes : [],
    editingNote : {} 
}

const notesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addNote, (state, action) => {
            state.notes.push(
                {
                    title : "Enter Title ...",
                    content : "Enter content ...",
                    id : nanoid(),
                    lastModified : new Date().toLocaleString()
                }
            );
            // state.notes.push(action.payload);
        })
        .addCase(deleteNote, (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        })
        .addCase(updateNote, (state, action) => {
            
        })
        .addCase(selectNote, (state, action) => {
            state.editingNote = state.notes.filter(note => note.id === action.payload.id);
        })
});

export default notesReducer;