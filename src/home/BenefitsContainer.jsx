import React from 'react';
import './Benefits.css';

export default function BenefitsContainer(props){
    return(
        <div className={props.itemClass}>
                <img className="img" src={props.img} alt="Benefits"/>
                <div className="benefitTextContainer">
                    <div className="benefitHeading">
                        <p>{props.heading}</p>
                    </div>
                    <div className="content">
                        {props.children}
                    </div>
                    <button className="buttonBenefit">{props.buttonText}</button>
                </div>
        </div>
    )
}