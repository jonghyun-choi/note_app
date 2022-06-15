import React from 'react'
import styles from '../styles/content.module.css'
import { useSelector } from 'react-redux'

export default function Content() {
    const editingNote = useSelector((state) => state.notes.editingNote);
    
    return (
        <div className={ styles.content }>
            <input 
                className={ styles.content_title }
                type="text"
                autoFocus
                value=""
            />
            <textarea 
                className={ styles.content_content }
                placeholder="Write your note here..."
            />
        </div>
    )
}
