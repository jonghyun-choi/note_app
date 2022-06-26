import styles from '../styles/main.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Main() {
    const editingNote = useSelector((state) => state.notes.editingNote);

    return (
        <div className={ styles.main }>
            <input 
                className={ styles.main_title }
                type="text"
                autoFocus
                placeholder="Write your title here..."
                value={ editingNote.title }
            />
            <textarea 
                className={ styles.main_content }
                placeholder="Write your note here..."
                value={ editingNote.content }
            />
        </div>
    );


    // return (
    //     <div className = { styles.main }>
    //         {/* 텍스트 입력 */}
    //         <div className = { styles.main_edit }>
    //             <input 
    //                 className = { styles.main_edit_title } 
    //                 type = "text" 
    //                 autoFocus
    //                 value = { title }
    //                 onChange = { e => onEditField("title", e.target.value) }
    //             />
    //             <textarea 
    //                 className = { styles.main_edit_content } 
    //                 id = "body" 
    //                 placeholder = "Write your note here..." 
    //                 value = { body }    
    //                 onChange = { e => onEditField("body", e.target.value) }
    //             />
    //         </div>
    //     </div>
    // )
}