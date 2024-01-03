import React from "react";
import styles from "./techstack.module.css";
const Techstack = () => {
  return (
    <div className={styles.container}>
      <h1>Tech Stack </h1>
      <div className={styles.innercontainer} >
        <span>
          <b> • Frontend </b>: - JavaScript, React js, Next js
        </span>
        <span>
          <b> • Backend: - </b>: - Node js , Express js
        </span>
        <span>
          <b> • Devops: - </b>: - Docker
        </span>
        <span>
          <b> • Database: - </b>: - MongoDB
        </span>
      </div>
    </div>
  );
};

export default Techstack;
