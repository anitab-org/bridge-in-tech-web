import React from 'react';
import './Benefits.css';
import BenefitsContainer from './BenefitsContainer'
import imgPartner from "../assets/images/benefit_partner.png"
import imgMember from "../assets/images/benefit_member.png"
import imgMentor from "../assets/images/benefit_mentor.png"

export default function Benefits(){
    return(
        <div>
            <div className="mission">
                <span style={{color:"#EF9425"}}>Our mission </span> is to provide a platform where <br/>everyone can reach their full potential - <span style={{fontWeight:250,fontStyle:"italic"}}>starting with you</span> 
            </div>
            <BenefitsContainer img={imgPartner} heading={<span>Become a <span style={{color:"#EF9425"}}>partner</span></span>} itemClass='benefitContainer' buttonText='Become a partner'>
                        Join our cause by signing up as a partner and help us aquire the resources we need for our members 
                        to succeed in their different career paths. So far 
                        we’ve helped <span style={{color:"#EF9425",fontWeight:400}}>100+ </span>individuals upskill and land their 
                        dream job. We can do more with your help.
            </BenefitsContainer>

            <BenefitsContainer img={imgMentor} heading={<span>Become a <span style={{color:"#EF9425"}}>mentor</span></span>} itemClass='benefitContainerReverse' buttonText='Become a mentor'>
                    Research shows that majority of people spend years to 
                    find a career that suits them. Help us reachout to those 
                    who need our help by signing up as a mentor and 
                    guiding our members to the paths that will give 
                    meaning to their lives. So far we have <span style={{color:"#EF9425",fontWeight:400}}>50+ </span>mentors.
            </BenefitsContainer>

            <BenefitsContainer img={imgMember} heading={<span>Become a <span style={{color:"#EF9425"}}>member</span></span>} itemClass='benefitContainer' buttonText='Become a member'>
                    Join our growing community of <span style={{color:"#EF9425",fontWeight:400}}>500+ </span>members kick 
                    starting their careers faster enough to adapt as years 
                    go by. We’re providing a platform where you meet and 
                    learn from proffessionals in the industry that have your 
                    best interest at heart.
            </BenefitsContainer>            
        </div>
    );
}