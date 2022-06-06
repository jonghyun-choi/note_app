import styles from '../styles/main.module.css';

export default function Main({ activeNote, onUpdateNote }) {
    const title = activeNote ? activeNote.title : "";
    const body = activeNote ? activeNote.body : "";

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified : Date.now()
        });
    };

    return (
        <div className = { styles.main }>
            {/* 텍스트 입력 */}
            <div className = { styles.main_edit }>
                <input 
                    className = { styles.main_edit_title } 
                    type = "text" 
                    autoFocus
                    value = { title }
                    onChange = { e => onEditField("title", e.target.value) }
                />
                <textarea 
                    className = { styles.main_edit_content } 
                    id = "body" 
                    placeholder = "Write your note here..." 
                    value = { body }    
                    onChange = { e => onEditField("body", e.target.value) }
                />
            </div>
            {/* 미리보기 */}
            <div className = { styles.main_preview }>
                <h1 className = { styles.main_preview_title }>
                    { title }
                </h1>
                <div className = { styles.markdown_preview }>
                    { body }
                </div>
            </div>
        </div>
    )
}