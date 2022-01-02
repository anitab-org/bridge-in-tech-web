import React, { useState } from "react";
import "./FAQcard.css";
import logo_left_arrow from "./../../assets/images/side_arrow.svg";
export default function FAQcard(props) {
    const [open, setopen] = useState(false);
    const onClickHandler = () => {
        setopen(!open);
    };
    return (
        <>
            <section className="faq_card">
                <h2 className="card_text">{props.text}</h2>
                <img className="card_sidelogo" src={logo_left_arrow} alt="FAQ_side_arrow" onClick={onClickHandler} />
            </section>
            {open ? (
                <div className="accordion_div">
                    <p className="accordion_text">{props.answer}</p>
                </div>
            ) : null}
        </>
    );
}
