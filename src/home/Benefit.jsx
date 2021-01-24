import React from 'react'
import './Benefit.css'
import  Benefit1 from "../assets/images/benefit1.png"
import  Benefit2 from "../assets/images/benefit2.png"

const Benefit = () => {
    return (
        <div className="container">
            <div className="box">
                <img className="img" src={Benefit1} alt="img1"/>
                <div className="listBox">
                    <h1 className="head">Benefit to members</h1>
                    <ul className="list">
                        <li className="listItem">Organization can use it as starting point to look for a potential employee and ensure that a person will meet the skill sets they need for the similar jobs within their own organization.</li>
                        <li className="listItem">IT Professionals can use it as a chance for a career enhancement, to broaden professional network, even possibly, gaining some financial benefit from program that offers stipend.</li>
                        <li className="listItem">Graduates or other job seekers can use it as a way to gain hands-on learning to a variety of skill sets that are desirable by the industries.</li>
                    </ul>
                </div>
            </div>
            <div className="box">
                <div className="listBox">
                    <h1 className="head">Our Goals</h1>
                    <ul className="list">
                        <li className="listItem">To promote equal opportunity by encouraging organisations to give priority in their mentoring program to people who fall within the minority based on the their gender, race, age, sexual orientation, physical/mental ability, education, work experience, socio economic, and religion.</li>
                        <li className="listItem">To bring the{" "}<a style={{
                            textDecoration:"underline"
                        }} href=" https://www.techrepublic.com/article/how-to-close-the-tech-skills-gap/" target="_blank">tech skills gap</a>{" "}closer by providing a space that allows collaboration between organizations, mentors and mentees through the mentoring programs.</li>
                    </ul>
                </div>
                <img className="img" src={Benefit2} alt="img1"/>
            </div>
        </div>
    )
}

export default Benefit
