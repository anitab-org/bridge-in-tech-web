import React from "react";
import { useLocation } from "react-router-dom";

export default function Member() {
    const { state } = useLocation();
    const member = state.member;
    const memberPortfolioUrl = `"/members/portfolio/${member.username}"`;

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">{member.name} Personal Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="myspace-form mx-auto">
                        <form-group controlId="formUsername">
                            <p className="input-control">
                                <label htmlFor="username">Username : </label>
                                {member.username}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formName">
                            <p className="input-control">
                                <label htmlFor="name">Name : </label>
                                {member.name}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formIrcId">
                            <p className="input-control">
                                <label htmlFor="ircId">IRC ID : </label>
                                {member.slack_username}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formIrcId">
                            <p className="input-control">
                                <label htmlFor="socialMediaLink">Social Media Links : </label>
                                {member.social_media_links}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group>
                            <div className="row">
                                <div className="col-sm text-center">
                                    <label htmlFor="availability">Available to be a : </label>
                                    <form-group>
                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-sm">{member.available_to_mentor && <label htmlFor="mentor">Mentor</label>}</div>
                                                <div className="col-sm">{member.need_mentoring && <label htmlFor="mentee">Mentee</label>}</div>
                                            </div>
                                        </div>
                                    </form-group>
                                </div>
                            </div>
                        </form-group>
                        <form-group controlId="formInterests">
                            <p className="input-control">
                                <label htmlFor="interests">Is available : </label>
                                {member.is_available ? "True" : "False"}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formInterests">
                            <p className="input-control">
                                <label htmlFor="interests">Interests : </label>
                                {member.interests}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formBio">
                            <p className="input-control">
                                <label htmlFor="bio">Bio :</label>
                                {member.bio}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formLocation">
                            <p className="input-control">
                                <label htmlFor="location">Location : </label>
                                {member.location}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formOccupation">
                            <p className="input-control">
                                <label htmlFor="occupation">Occupation : </label>
                                {member.occupation}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formCurrentOrganization">
                            <p className="input-control">
                                <label htmlFor="currentOrganization">Current Organization : </label>
                                {member.current_organization}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formSkills">
                            <p className="input-control">
                                <label htmlFor="skills">Skills : </label>
                                {member.skills}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formResumeUrl">
                            <p className="input-control">
                                <label htmlFor="resumeUrl">Resume Url : </label>
                                {member.resume_url}
                            </p>
                        </form-group>
                        <div>
                            <br></br>
                        </div>
                        <form-group controlId="formPhotoUrl">
                            <p className="input-control">
                                <label htmlFor="photoUrl">Photo Url : </label>
                                {member.photo_url}
                            </p>
                        </form-group>
                        <div className="row">
                            <div className="col-sm-6 offset-sm-9">
                                <a href={memberPortfolioUrl} className="btn btn-success" variant="success" name="toPortfolio" member={member}>
                                    Go to Portfolio
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
