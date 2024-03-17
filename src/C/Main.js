import styles from './Main.module.css'
import png from './imgs/png.png'

function main() {
    return (
        <div className={styles.main}>

            <div className={styles.container}>

                <div className={styles.left}>

                    <div className={styles.text}>
                        <h2>Online Master's Degree in Sustainability</h2>
                        <p>Our Professional Master Degree in Sustanbility. Entrepreneurship, and Techonology will prpare you to solve our society's grandest challenges You'll gain the most in demand skills needed in the 21s century to develop the sustainable ides and techonology for a better tomorow</p>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.btn1}><span class="glyphicon glyphicon-hand-right"> </span> Get Brochure</button>
                        <button className={styles.btn2}>Apply Now</button>
                    </div>

                </div>

                <div className={styles.right}>
                    <img src={png}></img>
                </div>

            </div>



        </div>
    )
}

export default main