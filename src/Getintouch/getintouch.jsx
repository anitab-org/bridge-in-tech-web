import React from "react";
import styles from "./getintouch.module.css";

export default function GetInTouch() {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.heading}>
            <p>Get <span style={{color:"#F1A140"}}>In Touch</span></p>
          </div>
          <div className={styles.subheading}>
            <p>Send us a message with your question and we’ll reply within 24 hours!</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form>
            <label>Name</label><br></br>
            <input type="text" name="fname" placeholder="John Doe"></input><br></br>
            <label>Email Address</label><br></br>
            <input type="email" name="email" placeholder="johndoe@gmail.com"></input><br></br>
            <label>Message</label><br></br>
            <input className={styles.message} type="text" name="message" placeholder="Your message"></input><br></br>
            <input className={styles.button} type="submit" value="Send Message"></input>
          </form>
        </div>
    </div>
  );
}
