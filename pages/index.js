import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import styles from '../styles/index.module.css';
import { useState } from 'react';
import uuid from 'react-uuid';

export default function Note() {
  const [NoteModel, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  return (
    <div className={ styles.note }>
      <Sidebar 
        notes = { NoteModel } 
        onClickAddNote = { handleClickAddNote } 
        onDeleteNote = { onDeleteNote } 
        activeNote = { activeNote }
        setActiveNote = { setActiveNote }  
      />
      <Main 
        activeNote = { getActiveNote() }
        onUpdateNote = { onUpdateNote }
      />
    </div>
  )
}
