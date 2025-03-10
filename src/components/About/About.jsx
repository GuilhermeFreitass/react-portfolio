import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "./../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt=""
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                voluptatem exercitationem eius voluptatibus aliquid, sequi
                libero porro tempora accusamus vel iusto mollitia nihil! Alias
                cum vitae delectus consequatur? Repellendus, cum.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                similique quidem eum, optio consequuntur delectus sed adipisci
                repellendus. Nesciunt odit natus alias aspernatur obcaecati
                consectetur architecto? Natus quisquam aperiam inventore?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
