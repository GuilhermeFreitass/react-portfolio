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
          <img src={getImageUrl("contact/emailIcon.png") || "/placeholder.svg"} alt="Email icon" />
          <a href="mailto:guilhermeaqf@gmail.com">guilhermeaqf@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png") || "/placeholder.svg"} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/guilherme-aquino-ferreira-4b6a5b1b2/">linkedin.com/in/guilherme</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png") || "/placeholder.svg"} alt="Github icon" />
          <a href="https://github.com/guilhermeaqf">github.com/guilhermeaqf</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact

