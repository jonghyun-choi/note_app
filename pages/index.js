import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import styles from '../styles/index.module.css'

export default function Note() {
  return (
    <div className={ styles.note }>
        <Sidebar />
        <Main />
    </div>
  )
}
