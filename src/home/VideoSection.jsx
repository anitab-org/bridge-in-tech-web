import React from "react";
import "./VideoSection.css";
import VideoSectionCard from "./VideoSectionCard/VideoSectionCard";
export default function VideoSection() {
    return (
        <React.Fragment>
            <section className="video-section">
                <h1 className="heading">
                    <span style={{ color: "#ff3300" }}>Why</span> Bridge-In-Tech
                </h1>
                <div className="cards-container">
                    <div className="cards-container-content">
                        <VideoSectionCard
                            count="01"
                            title="Unlimited target"
                            description="Everyone is welcomed to sign up as mentees regardless of gender,age, religion, sexuality and/or believes. There’s room for everyone!"
                        />
                        <div className="liner"></div>
                        <VideoSectionCard
                            count="02"
                            title="Hands-on learning"
                            description="With the help of our mentors, our mentees learn by working on actual projects provided by our partner organisations. We learn by doing!"
                        />
                        <div className="liner"></div>
                        <VideoSectionCard
                            count="03"
                            title="Organisation relief"
                            description="Organisations are assured of employing individuals they could trust because they’ve had a hand in training them. Win win situation!"
                        />
                    </div>
                </div>
                <div className="video-player-conatiner">
                    <iframe className="iframe" title="Our value Proposition" width="420" height="315" src="https://www.youtube.com/embed/7J6PPxX4sCI"></iframe>
                </div>
            </section>
        </React.Fragment>
    );
}
