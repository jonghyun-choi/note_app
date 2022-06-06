import NoteModel from '../Model/NoteModel';
import { useState } from 'react';

export default class NoteController {
    static notes = [];
    static setNotes;

    constructor() {
        noteState = useState([]);
        notes = noteState[0];
        setNotes = noteState[1];
    }

    static getNote(id) {
        return notes.find(note => note.getId() === id);
    }
    
    static getAllNotes() {
        return this.notes;
    }

    static addNote(title, body) {
        note = new NoteModel(title, body);
        this.setNotes([note, ...notes]);
    }

    static updateNote(id, title, body) {
        this.setNotes(notes.map(note => {
            if(note.getId() === id) {
                note.setTitle(title);
                note.setContent(body);
            }
        }));
    }
    static deleteNote(id) {
        this.setNotes(notes.filter(note => note.getId() !== id));
    }
}
