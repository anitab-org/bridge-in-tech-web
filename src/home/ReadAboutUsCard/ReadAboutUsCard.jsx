import React from "react";
import './ReadAboutUsCard.css';
import arrow from './.././../assets/images/long left.svg';
export default function ReadAboutUsCard(props) {

    return (
        <div className="card_body">
          <div className="card_banner_container"><img src={props.wallpaper} className="card_banner_img" alt="card_banner" /></div>
          <div className="card_content">
            <h3 className="card_sub_heading">{props.heading}</h3>
            <p className="card_descr">{props.description}</p>
            <div className="read_now_conatiner"><h2 className="readnow_heading">Read now</h2><img src={arrow} className="card_arrow" alt="arrow" /></div>
          </div>
        </div>
    )
}
