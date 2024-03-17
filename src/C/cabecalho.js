import styles from './cabecalho.module.css'
import logo from './imgs/logo.png'

function cabecalho() {
    return (
        <div className={styles.cabecalho}>
            
            <div className={styles.divOne}>
                <img src={logo}></img>
            </div>

            <div className={styles.divTwo}>
                <a>Home</a>
                <a>Bechlor</a>
                <a>Master</a>
                <a>About</a>
            </div>

            <div className={styles.divTrhee}>
                <button>Get Brochure</button>
            </div>

        </div>
    )
}

export default cabecalho