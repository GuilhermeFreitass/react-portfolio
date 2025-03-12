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
                Desenvolvo interfaces funcionais e responsivas, focando em
                usabilidade e performance. Tenho experiência com React, Next,
                JavaScript, TypeScript e TailwindCSS, criando aplicações bem
                estruturadas e fáceis de manter.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Trabalho no desenvolvimento de APIs e sistemas eficientes,
                utilizando NodeJS, NestJS e bancos de dados relacionais e não
                relacionais. Busco escrever código limpo e otimizado para
                garantir bom desempenho e escalabilidade.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
