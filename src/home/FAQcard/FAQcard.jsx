import React from "react";
import './FAQcard.css';
export default function FAQcard(props) {

    return (
        <section className="faq_card">
          <h2 className="card_text">{props.text}</h2>
          <img className="card_sidelogo"  />
        </section>
    )
}
