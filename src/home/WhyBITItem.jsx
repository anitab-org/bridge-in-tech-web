import React from 'react';
import './WhyBIT.css';

export default function WhyBITItem(props){
    return(
        <div class="YBITitem" align="center">
            <span className="WhyBITNumber">{props.number}</span><br/><br/>
            <span className="WhyBITHeading">{props.heading}</span><br/><br/>
            <span className="WhyBITContent">{props.children}</span>
        </div>
    )
}