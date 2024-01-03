import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./contact.module.css";



const Contact = () => {
  const [state, handleSubmit] = useForm("xdoqodgw");

  if (state.succeeded) {
    return <h1 className={styles.ondone} >
     Submitted!!
    </h1>
    ;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1>
        Interested to work together? <br />
        Let's talk
      </h1>
      <div className={styles.finput}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Email" />
      </div>
      <textarea name="Message" type="passage" placeholder="Message" />
      <button type="submit" 
      disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
};

export default Contact;
