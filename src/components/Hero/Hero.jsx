import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, Sou Guilherme</h1>
        <p className={styles.description}>Sou um Desenvolvedor FullStack graduando em Engenharia de Computação pela Universidade Federal de Sergipe.</p>
        <a href="#contact" className={styles.contactBtn}>Contate-me</a>
      </div>
      <img src={getImageUrl("hero/heroImage2.png")} alt="" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      

    </section>
  );
};

export default hero;
