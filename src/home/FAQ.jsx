import React from "react";
import './FAQ.css';
import FAQcard from "./FAQcard/FAQcard";
export default function FAQ() {

    return (
        <section className="faq_section">
          <div className="heading_container">
            <h1 className="heading_faq">FAQs</h1>
          </div>
          <div className="faq_content_conatiner">
            <div className="main_content_faq">
              <FAQcard text="Do I need to pay to be a member of Bridge-in-tech?" />
              <FAQcard text="What are the ways I can communicate in the community?" />
              <FAQcard text="How long does the program take and are the meet-ups physical or am allowed to join online?" />
              <FAQcard text="What are the benefits if joining bridge-in-tech as a regular member?" />
              <FAQcard text="What do I need to get started as a mentee in bridge-in-tech?" />
            </div>
          </div>
        </section>
    )
}
