import React from "react";
import "./ReadAboutUs.css";
import card_wallpaper_1 from './../assets/images/card_wallaper_1.svg'
import card_wallpaper_2 from './../assets/images/card_wallaper_2.svg'
import card_wallpaper_3 from './../assets/images/card_wallaper_3.svg'
import ReadAboutUsCard from './ReadAboutUsCard/ReadAboutUsCard';
export default function ReadAboutUs() {

    return (
        <section id="read-about-us">
          <h1 className="heading"><span style={{color:'#ff3300'}}>Read</span> about us</h1>
          <div className="container-aboutus">
            <div className="content_aboutus">
              <ReadAboutUsCard wallpaper={card_wallpaper_1} heading="How to contribute to bridge-in-tech"  description="Bridge-in-tech started with an aim of reducing the gap between companies and skilled individuals in the industry" />
              <ReadAboutUsCard wallpaper={card_wallpaper_2} heading="Features available in bridge-in-tech"  description="Bridge-in-tech started with an aim of reducing the gap between companies and skilled individuals in the industry" />
              <ReadAboutUsCard wallpaper={card_wallpaper_3} heading="Why organisations should invest in bridge-in-tech"  description="Bridge-in-tech started with an aim of reducing the gap between companies and skilled individuals in the industry" />
          </div>
          </div>
        </section>
    )
}
