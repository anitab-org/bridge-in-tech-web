import React from "react";
import "./GetInTouch.css";

export default function GetInTouch() {
  return (
    <div className="GITcontainer">
        <div className="formContainer">
          <form>
            <label>Name</label><br></br>
            <input type="text" name="fname" placeholder="John Doe"></input><br></br>
            <label>Email Address</label><br></br>
            <input type="email" name="email" placeholder="johndoe@gmail.com"></input><br></br>
            <label>Message</label><br></br>
            <input className="message" type="text" name="message" placeholder="Your message"></input><br></br>
            <input className="button" type="submit" value="Send Message"></input>
          </form>
        </div>
        <div className="textContainer">
          <div className="heading">
            <p>Get <span style={{color:"#F1A140"}}>In Touch</span></p>
          </div>
          <div className="subheading">
            <p>Send us a message with your question and we’ll reply within 24 hours!</p>
          </div>
        </div>
    </div>
  );
}
