import styles from '../styles/sidebar.module.css'
import NotePreviewList from './NotePreview';

export default function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_header}>
                <h1>Notes</h1>
                <button onClick={ onAddNote }>Add</button>
            </div>

            <div className={styles.sidebar_notes}>
                <NotePreviewList notes = {notes}/>
            </div>
        </div>
    )
}