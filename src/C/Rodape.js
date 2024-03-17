import styles from './Rodape.module.css'
import google from './imgs/google-white-logo.png'
import face from './imgs/28-284015_logo-de-facebook-blanco-png-transparent-png.png'
import linkedin from './imgs/linkedin.png'
import insta from './imgs/insta.png'

function Rodape() {
    return (
        <div className={styles.rodape}>

           <div>
                <img id={styles.google} src={google}></img>
            </div>
            <div>
                <img id={styles.face} src={face}></img>
            </div>
            <div>
                <img id={styles.linkedin} src={linkedin}></img>
            </div>
            <div>
            <img id={styles.insta} src={insta}></img>
            </div>
           

        </div>
    )
}

export default Rodape