import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import github from "./../assets/images/github.svg";
import linkdin from "./../assets/images/LinkedIn.svg";
import twitter from "./../assets/images/Twitter.svg";
import facebook from "./../assets/images/facebook.svg";
export default function Footer() {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className="main-flexbox">
          <div className="flexbox-item">
            <img className="logo" src="#" alt="Logo"></img>
            <h4 className="text">
              We are known for connecting top talents with top comapnies. We
              make great possibilities happen.
            </h4>
          </div>
          <div className="flexbox-item">
            <h3 className="heading">Explore</h3>
            <ul className="list">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="li">Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li className="li">About Us</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li className="li">Blogs</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li className="li">FAQ</li>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <li className="li">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3 className="heading">Visit</h3>
            <ul className="list">
              <li className="li">3 Birrel Avenue</li>
              <li className="li">Ashish</li>
              <li className="li">Bangladesh, India</li>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3 className="heading">Legal</h3>
            <ul className="list">
              <li className="li">
                <a href="https://anitab.org/terms-of-use/" className="Links" target="_blank" rel="noopener noreferrer"  >
                  Terms
                </a>
              </li>
              <li className="li">
                <a href="https://anitab.org/privacy-policy/" className="Links" target="_blank" rel="noopener noreferrer">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3 className="heading">Get In Touch</h3>
            <ul className="list">
              <li className="li">
                <a href="hello@bridgeintech.com" className="Links">
                  hello@bridgeintech.com
                </a>
              </li>
              <li className="li">+254713654608</li>
            </ul>
          </div>
        </div>
        <div className="bootomDiv">
          <hr className="hr"></hr>
          <div className="bottom-flexbox">
            <div className="bottom-flexboxitem">
              <h5 className="text-bottom">
                Bridge In Tech. All Rights Reserved.
              </h5>
            </div>
            <div className="bottom-flexboxitem">
              <a href="https://github.com/anitab-org" target="_blank" rel="noopener noreferrer">
                <img
                  src={github}
                  className="social-logos"
                  alt="gihub_logo"
                ></img>
              </a>
              <a href="https://www.linkedin.com/company/anitaborg-india/" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkdin}
                  className="social-logos"
                  alt="linkdin_logo"
                ></img>
              </a>
              <a href="https://twitter.com/anitab_org?lang=en" target="_blank" rel="noopener noreferrer">
                <img
                  src={twitter}
                  className="social-logos"
                  alt="twitter_logo"
                ></img>
              </a>
              <a href="https://www.facebook.com/AnitaBorgIndia/" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebook}
                  className="social-logos"
                  alt="facebook_logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
