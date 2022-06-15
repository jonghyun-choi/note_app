import styles from '../styles/main.module.css';
import React from 'react';
import Footer from './Footer'
import Content from './Content'

export default function Main() {

    return (
        <div>
            <Content />
            <Footer />
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