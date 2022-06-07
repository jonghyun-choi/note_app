import React from 'react';
import NotePreview from './NotePreview';
import styles from '../styles/notePreviewList.module.css';

export default function NotePreviewList() {
    return (
        <div>
            { notes.map(note => ( <NotePreview /> )) }
        </div>
    )
}
