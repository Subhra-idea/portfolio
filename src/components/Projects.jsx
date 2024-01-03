import styles from "./projects.module.css";
import React, { useState } from "react";
import img1 from '../utils/img1.png'
import img2 from '../utils/img2.png'
import img3 from '../utils/img3.png'
import img4 from '../utils/img4.png'
import img5 from '../utils/img5.png'


import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const projetcImages = [img1, img2, img3, img4, img5];

const Projects = () => {
  const [item, setitem] = useState(0);
  let length = 5;
  const arrowClickNext = () => {
    if (item < length - 1) {
      setitem(item + 1);
    } else {
      setitem(0);
    }
  };
  const arrowClickPrev = () => {
    if (item > 0) {
      setitem(item - 1);
    } else {
      setitem(length - 1);
    }
  };
  return (
    <div className={styles.project}>
      <div className={styles.heading}>
        <h1>
         Some Projects I have designed and build <br /> 
        </h1>
      </div>
      <div className={styles.slider}>
        <FaArrowAltCircleLeft size={50} onClick={arrowClickPrev} />
        <img className={styles.img} src={projetcImages[item]} alt="image" />

        <FaArrowAltCircleRight size={50} onClick={arrowClickNext} />
      </div>
    </div>
  );
};

export default Projects;
