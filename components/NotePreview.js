import React from 'react';
import styles from '../styles/notePreview.module.css';
import { deleteNote, selectNote } from '../store/actions/noteActions';
import { useDispatch } from 'react-redux';

export default function NotePreview({ note }) {
    const id = note ? note.id : "";
    const title = note ? note.title: "";
    const content = note ? note.content: "";
    const lastModified = note ? note.lastModified: "";

    const dispatch = useDispatch();

    const deleteNoteHandler = (id) => {
        dispatch(deleteNote({ id : id }))
    };

    const selectNoteHandler = (id) => {
        dispatch(selectNote({id : id}))
    };

    return (
        <div className={ styles.notePreview } onClick={() => selectNoteHandler(id)}>
            <div className={ styles.notePreview_title }>
                <strong>{ title }</strong>
                <button onClick={() => deleteNoteHandler(id)}>X</button>
            </div>

            <p class={ styles.notePreview_content }>
                {content && `${content.substr(0, 100)} ...` }
            </p>

            <small className={ styles.notePreview_lastModified }>
                Last Modified {` ${lastModified}`}
            </small>
        </div>
    )
}