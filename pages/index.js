import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Header from '../components/Header'

import styles from '../styles/index.module.css'

export default function Note() {
  // layout을 줄때 wrapper로 감싸야 정상 작동 하는가 ?
  // return (
  //   <div className={ styles.wrapper }>
  //       <Header className={styles.wrapper_header} />
  //       <Sidebar className={styles.wrapper_aside} />
  //       <Main className={styles.wrapper_main} />
  //       <Footer className={styles.wrapper_footer} />
  //   </div>
  // )

  
  return (
    <div className={ styles.wrapper }>
      <header className={ styles.wrapper_header }>
        <Header />
      </header>
      <aside className={ styles.wrapper_aside }>
        <Sidebar />
      </aside>
      <main className={ styles.wrapper_main }>
        <Main />
      </main>
    </div>
  )
  
}
