import React from 'react';
import styles from '../styles/sidebar.module.css';
import NotePreviewList from './NotePreviewList';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addNote } from '../store/actions/noteActions';

export default function Sidebar() {
    const dispatch = useDispatch();
    const addNoteHandler = (e) => {
        e.preventDefault();
        dispatch(addNote({
            title : "Enter Title ...",
            content : "Enter content ...",
            id : nanoid(),
            lastModified : new Date().toLocaleString()
        }));
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_header}>
                <button onClick={addNoteHandler}>Add Note</button>
            </div>
            <div className={styles.sidebar_notes}>
                <NotePreviewList />
            </div>
        </div>
    )
}