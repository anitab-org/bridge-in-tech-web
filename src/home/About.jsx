import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="top">
        <img
          width="100%"
          height="350px"
          alt="About section"
          src="https://user-images.githubusercontent.com/37622734/93429699-30e60d80-f8df-11ea-99b5-46778a23ddc3.png"
        />
      </div>
      <div className="middle">
        <h1>About BridgeInTech</h1>
      </div>
      <div className="bottom">
        <p>
          Bridge-In-Tech is one of open source projects under AnitaB.org Open
          Source umbrella. It is inspired by the existing{" "}
          <a
            href="https://github.com/anitab-org/mentorship-backend/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            AnitaB.org Mentorship System
          </a>{" "}
          which is an application that matches women in tech to mentor each
          other, on career development, through 1:1 relations during a certain
          period of time. BridgelnTech takes this idea further by encouraging
          organizations to collaborate with mentors and mentees on mentoring
          programs. Through Bridge-In-Tech, an organization can offer a
          mentorship program to a mentor and a mentee that is customised to meet
          the needed skills set within its organisation while providing a safety
          and supportive environment for these mentor/mentee to work in.
          Although the main focus is to empower women in tech, following
          AnitaB.org's values that welcomed all allies who support equity in
          tech, this application is also open to anyone that consider themselves
          allies.
        </p>
        <a
          href="https://medium.com/anitab-org-open-source/bridgeintech-by-anitab-org-85745853865d?source=friends_link&sk=fcb616ef0ac7e1e85ac6b58b513a56ee"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about the project here...
        </a>
      </div>
    </div>
  );
}
