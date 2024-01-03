import styles from "./navbar.module.css";
import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <MdOutlinePerson size={40} />
        <h1>Subhra</h1>
      </div>
      <div className={styles.icons}>
     <a href="https://github.com/Subhra-idea/" target="_blank">    <FaGithub size={25} /></a>
     <a href="https://www.linkedin.com/in/subhrakanti-bose/" target="_blank">  <FaLinkedin size={25} /></a>
        <FaXTwitter size={25}/>
        <a href="https://github.com/Subhra-idea/" target="_blank">  <FaInstagram size={25}/></a>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* <div className={styles.mode} >
            Mode
        </div> */}
    </nav>
  );
};

export default Navbar;
