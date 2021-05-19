import React from 'react';
import './WhyBIT.css';
import WhyBITItem from './WhyBITItem'

export default function WhyBIT(){
    return(
        <div align="center" style={{padding:'2rem 0rem 4rem 0rem',backgroundColor:"#E5E5E5"}}>
            <div className="YBITHead"><span style={{color:"#EF9425"}}>Why</span> Bridge-in-Tech</div>
            <div class="WhyBITflex">            
                <WhyBITItem heading={<span><span style={{color:"#EF9425"}}>Unlimited </span>target</span>} number="01">
                Everyone is welcomed to sign up as mentees regardless of gender,age, religion, sexuality and/or believes. There’s room for everyone!
                </WhyBITItem>                
                <WhyBITItem heading={<span><span style={{color:"#EF9425"}}>Hands-on </span>learning</span>} number="02">
                With the help of our mentors, our mentees learn by working on actual projects provided by our partner organisations. We learn by doing!
                </WhyBITItem>                
                <WhyBITItem heading={<span><span style={{color:"#EF9425"}}>Organisation </span>relief</span>} number="03">
                Organisations are assured of employing individuals they could trust because they’ve had a hand in training them.Win win situation!
                </WhyBITItem>
            </div>
        </div>
    )
}