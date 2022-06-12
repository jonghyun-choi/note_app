import { createAction } from "@reduxjs/toolkit";

export const addNote = createAction('addNote');
export const deleteNote = createAction('deleteNote');
export const updateNote = createAction('updateNote');