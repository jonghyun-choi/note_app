import React from 'react';
import NotePreview from './NotePreview';
import styles from '../styles/notePreviewList.module.css';

export default function NotePreviewList({ notes }) {
    return (
        <div>
            { notes.map(note => ( <NotePreview note = { note }/> )) }
        </div>
    )
}
