import styles from "./exedu.module.css";
import React, { useState } from "react";
const Education = () => {
  return (
    <div className={styles.subconatiner}>
      <h1>Education</h1>
      <div className={styles.innerContainer}>
        <span>2019-2023 - </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nulla, culpa amet nostrum placeat quidem illum. Nisi quidem cum esse
          consequatur nam provident blanditiis tenetur neque amet tempore,
          soluta iusto.
        </span>
      </div>
    </div>
  );
};
const Experience = () => {
  return (
    <div className={styles.subconatiner}>
      <h1>Experience</h1>
      <div className={styles.innerContainer}>
        <span>
          <b> Freelancer </b>: - Work as a full stack freelancer | May 2021 -
          Present
        </span>
        <span>• Did projects using Front-end and backend technologies</span>
        <span>
          • Build Auth API in Express and Node js, which enables seamless login
          and sign up functionality
        </span>
        <span>
          • Build robust API in express and Node, enabling seamless data
          fetching
        </span>
        <span>
          • Proficiently managed programming for websites using Node js and
          Express js for client
        </span>
      </div>
    </div>
  );
};
const Project = () => {
   
  return (
    <div className={styles.subconatiner}>
      <h1>Recent Projects</h1>
      <div className={styles.innerContainer}>
        <span>
          <b>Hotel Booking Website</b> : Front end and Back end Development
        </span>
        <span>
          Tech Stack: React js , Node js, Express js , JWT, MongoDB, Bcrypt js,
          Stripe
        </span>
        <span>
          {" "}
          • Front end developed using React js for creating interactive , user
          -friendly , responsive user interfaces
        </span>
        <span>
        • Back end development using Node js and Express js to handle api integrations
        </span>
        <span>
        • Database management done using MongoDB, to store and manage data
        </span>
        <span>
        • User authentication: user authentication and authorization done using JWT ,
Sessions and Cookies.
        </span>
        <span>
        • Payment: Use stripe for payment
        </span>
        <span>
       • Product catalog, Searching , sorting
        </span>
      </div>
      <div className={styles.innerContainer}>
        <span>
          <b>FoodBuddy</b> :- A food ordering Website
        </span>
        <span>
          Tech Stack: React js , Node js, Express js , JWT, MongoDB, Bcrypt js,
        </span>
        <span>
          {" "}
          • Front end developed using React js for creating interactive , user
          -friendly , responsive user interfaces
        </span>
        <span>
        • Back end development using Node js and Express js to handle api integrations
        </span>
        <span>
        • Database management done using MongoDB, to store and manage data
        </span>
        <span>
        • User authentication: user authentication and authorization done using JWT ,
Sessions and Cookies.
        </span>
        
      </div>
    </div>
  );
};
const ExperiEdu = () => {
    const [curr, setcurr] = useState("Education")
  return (
    <div className={styles.container}>
      <div className={styles.buttonDiv}>
        <button onClick={()=>{
            setcurr("Education")
        }} >Education</button>
        <button  onClick={()=>{
            setcurr("Experience")
        }}  
        >Experience</button>
        <button  onClick={()=>{
            setcurr("Projects")
        }}  >Recent Projects</button>
      </div>
      {
       curr==="Education"?<Education/>:curr==="Experience"?<Experience/>:<Project/>
      }
      {/* <Project /> */}
    </div>
  );
};

export default ExperiEdu;
