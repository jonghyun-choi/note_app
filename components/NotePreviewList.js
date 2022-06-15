import React from 'react';
import NotePreview from './NotePreview';
import { useSelector } from 'react-redux';

export default function NotePreviewList() {
    const notes = useSelector((state) => state.notes.notes);
    
    return (
        <div>
            { notes.map(note => ( <NotePreview note = { note }/> )) }
        </div>
    );
}