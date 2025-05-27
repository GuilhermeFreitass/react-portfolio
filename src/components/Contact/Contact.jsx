import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Sinta-se à vontade para entrar em contato!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png") || "/placeholder.svg"} alt="Email icon"  />
          <a href="mailto:guilhermeaqf@gmail.com" target="blank">guilhermeaqf@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png") || "/placeholder.svg"} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/gui-freitass/" target="blank">linkedin.com/in/gui-freitass</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png") || "/placeholder.svg"} alt="Github icon" />
          <a href="https://github.com/guilhermefreitass" target="blank">github.com/guilhermefreitass</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact

