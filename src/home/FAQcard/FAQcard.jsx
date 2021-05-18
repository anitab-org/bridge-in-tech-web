import React from "react";
import './FAQcard.css';
import logo_left_arrow from './../../assets/images/side_arrow.svg'
export default function FAQcard(props) {

    return (
        <section className="faq_card">
          <h2 className="card_text">{props.text}</h2>
          <img className="card_sidelogo" src={logo_left_arrow}  />
        </section>
    )
}
