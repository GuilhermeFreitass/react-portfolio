import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrap}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Pré-visualização do projeto ${title}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {demo ? (
        <div className={styles.links}>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Demo
          </a>
        </div>
      ) : null}
    </div>
  );
};