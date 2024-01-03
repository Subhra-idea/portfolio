import styles from "./banner.module.css";
import Typewriter from "typewriter-effect/dist/core";
import img from "../utils/portfolio1.png";
import Resume from "../utils/subhra.pdf";
import { Link } from "react-router-dom"; 
import { TypeAnimation } from 'react-type-animation';

import React from "react";
import TypewriterComponent from "typewriter-effect";

const Banner = () => {
  const strings = "Hello";
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        
        <span>Welcome to my portfolio website</span>
        <div className={styles.leftinner}>
        <h1>Hey folks, I`m </h1>
        <TypeAnimation
        sequence={[
          "Software Developer",
          1000,
          "WebApp Developer",
          1000,
          "MERN Enthusiast",
          1000,
          "Next.js Developer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em', 
      color: "yellow"}}
      />
        </div>
        <p>
          Building a successful product is a challenge. I am highly energetic in
          user <br /> experience design, interfaces and web development.
        </p>
        <div className={styles.buttondiv}>
          <a
            href={Resume}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download Resume</button>
          </a>
          <button>Get a free quote</button>
        </div>
      </div>
      <div className={styles.right}>
        <img width={450} height={300} src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
