import React from "react";
import "./ReadAboutUs.css";
import card_wallpaper_1 from './../assets/images/card_wallaper_1.svg'
import card_wallpaper_2 from './../assets/images/card_wallaper_2.svg'
import card_wallpaper_3 from './../assets/images/card_wallaper_3.svg'
import arrow from './../assets/images/long left.svg'
export default function Home() {

    return (
        <section id="read-about-us">
          <h1 className="heading"><span style={{color:'#ff3300'}}>Read</span> about us</h1>
          <div className="container-aboutus">
            <div className="content_aboutus">
            <div className="card_aboutus">
              <div className="card_banner_container"><img src={card_wallpaper_1} className="card_banner_img" alt="card_banner" /></div>
              <div className="card_content">
                <h3 className="card_sub_heading">How to contribute to bridge-in-tech</h3>
                <p className="card_descr">Bridge-in-tech started with an aim of reducing the gap between companies and skilled individuals in the industry</p>
                <div className="read_now_conatiner"><h2 className="readnow_heading">Read now</h2><img src={arrow} className="card_arrow" alt="arrow" /></div>
              </div>
            </div>
            <div className="card_aboutus">
              <div className="card_banner_container"><img src={card_wallpaper_2} className="card_banner_img" alt="card_banner" /></div>
              <div className="card_content">
                <h3 className="card_sub_heading">Features available in bridge-in-tech</h3>
                <p className="card_descr">Bridge-in-tech started with an aim of reducing the gap between companies and skilled individuals in the industry</p>
                <div className="read_now_conatiner"><h2 className="readnow_heading">Read now</h2><img src={arrow} className="card_arrow" alt="arrow" /></div>
              </div>
            </div>
            <div className="card_aboutus">
              <div className="card_banner_container"><img src={card_wallpaper_3} className="card_banner_img" alt="card_banner" /></div>
              <div className="card_content">
                <h3 className="card_sub_heading">Why organisations should invest in bridge-in-tech</h3>
                <p className="card_descr">Bridge-in-tech started with an aim of reducing the gap between companies and skilled individuals in the industry</p>
                <div className="read_now_conatiner"><h2 className="readnow_heading">Read now</h2><img src={arrow} className="card_arrow" alt="arrow" /></div>
              </div>
            </div>
          </div>
          </div>
        </section>
    )
}
