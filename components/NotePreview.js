import React from 'react';
import styles from '../styles/notePreview.module.css';
import Note from '../Model/NoteModel';

export default function NotePreview({ note, handleClickDeleteNote }) {
    /*
    const id = note.getId();
    const title = note.getTitle();
    const body = note.getBody();
    const lastModified = note.getLastModified();
    */

    const id = "", title = "", body = "", lastModified = "";

    return (
        <div>
            {/* NotePreview title */}
            <div>
                <strong>{ title }</strong>
                <button onClick={() => handleClickDeleteNote(id)}>Delete</button>
            </div>

            {/* NotePreview body */}
            <p>{body && `${body.substr(0, 100)} ...` }</p>

            {/* NotePreview Last Modified Date */}
            <small>
                Last Modified {` ${lastModified}`}
            </small>
        </div>
    )
}