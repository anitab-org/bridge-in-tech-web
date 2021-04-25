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
            <img className="logo" src="#" alt="Logo" />
            <h4 className="text">
              We are known for connecting top talents with top companies. We
              make great possibilities happen.
            </h4>
          </div>
          <div className="flexbox-item">
            <h3 className="heading-footer">Explore</h3>
            <ul className="list">
              <Link to="/" className="Link_Li" >
                <li className="li">Home</li>
              </Link>
              <Link className="Link_Li" >
                <li className="li">About Us</li>
              </Link>
              <Link className="Link_Li">
                <li className="li">Blogs</li>
              </Link>
              <Link className="Link_Li" >
                <li className="li">FAQ</li>
              </Link>
              <Link className="Link_Li">
                <li className="li">Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3 className="heading-footer">Legal</h3>
            <ul className="list">
              <li className="li">
                <a href="https://anitab.org/terms-of-use/" className="Links" target="_blank" rel="noopener noreferrer"  >
                  Terms Of Use
                </a>
              </li>
              <li className="li">
                <a href="https://anitab.org/privacy-policy/" className="Links" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3 className="heading-footer">Get In Touch</h3>
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
                />
              </a>
              <a href="https://www.linkedin.com/company/anitab-org/" target="_blank" rel="noopener noreferrer">
                <img
                  src={linkdin}
                  className="social-logos"
                  alt="linkdin_logo"
                />
              </a>
              <a href="https://twitter.com/anitab_org?lang=en" target="_blank" rel="noopener noreferrer">
                <img
                  src={twitter}
                  className="social-logos"
                  alt="twitter_logo"
                />
              </a>
              <a href="https://www.facebook.com/AnitaB.0rg/" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebook}
                  className="social-logos"
                  alt="facebook_logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
