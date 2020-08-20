import React from "react";
import { useLocation } from "react-router-dom";


export default function Program() {
    const { state } = useLocation();
    const program = state.program;
    
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Program Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {/* <form className="program-form mx-auto" onSubmit={handleSubmit}> */}
                    <form className="program-form mx-auto">
                        <form-group controlId="formprogramName">
                            <p className="input-control">
                                <label htmlFor="username">Program Name : </label>
                                {program.program_name}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formOrganizationName">
                            <p className="input-control">
                                <label id="organizationName">Organization Name :</label>
                                {program.organization_name}
                            </p>
                        </form-group>
                        <form-group controlId="formRespresentativeName">
                            <p className="input-control">
                                <label id="representativeName">Representative name :</label>
                                {program.representative_name}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formStartDate">
                            <p className="input-control">
                                <label id="startDate">Start Date :</label>
                                {program.start_date}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formEndDate">
                            <p className="input-control">
                                <label id="endDate">End Date :</label>
                                {program.end_date}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formDescription">
                            <p className="input-control">
                                <label id="description">Description :</label>
                                {program.description}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formTargetSkills">
                            <p className="input-control">
                                <label id="targetSkills">Target Skills :</label>
                                {program.target_skills.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateGender">Gender</label>
                                {program.target_candidate_gender}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateAge">Age</label>
                                {program.target_candidate_age}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateEthnicity">Ethnicity</label>
                                {program.target_candidate_ethnicity}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateSexualOrientation">Sexual Orientation</label>
                                {program.target_candidate_sexual_orientation}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateReligion">Religion</label>
                                {program.target_candidate_religion}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidatePhysicalAbility">Physical Ability</label>
                                {program.target_candidate_physical_ability}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateMentalAbility">Mental Ability</label>
                                {program.target_candidate_mental_ability}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateSocioEconomic">Socio Economic</label>
                                {program.target_candidate_socio_economic}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateHighestEducation">Highest Education</label>
                                {program.target_candidate_highest_education}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateYearsOfExperience">Years of Experience</label>
                                {program.target_candidate_years_of_experience}
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formOther">
                            <p className="input-control">
                                <label id="other">Other Target Candidate:</label>
                                {program.other}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPaymentCurrency">
                            <p className="input-control">
                                <label id="paymentCurrency">Payment Currency :</label>
                                {program.payment_currency}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPaymentAmount">
                            <p className="input-control">
                                <label id="paymentAmount">Payment Amount :</label>
                                {program.payment_amount}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="contactType">Contact Type :</label>
                                {program.contact_type}
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="zone">Zone :</label>
                                {program.zone}
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formStudentResponsibility">
                            <p className="input-control">
                                <label id="studentResponsibility">Student Responsibility :</label>
                                {program.student_responsibility.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formMentorResponsibility">
                            <p className="input-control">
                                <label id="mentorResponsibility">Mentor Responsibility :</label>
                                {program.mentor_responsibility.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formOrganizationResponsibility">
                            <p className="input-control">
                                <label id="organizationResponsibility">Organization Responsibility :</label>
                                {program.organization_responsibility.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formStudentRequirements">
                            <p className="input-control">
                                <label id="studentRequirements">Student Requirements :</label>
                                {program.student_requirements.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formMentorRequirements">
                            <p className="input-control">
                                <label id="mentorRequirements">Mentor Requirements :</label>
                                {program.mentor_requirements.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formResourcesProvided">
                            <p className="input-control">
                                <label id="resourcesProvided">Resources Provided :</label>
                                {program.resources_provided.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactName">
                            <p className="input-control">
                                <label id="contactName">Contact Person's Name :</label>
                                {program.contact_name}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactDepartment">
                            <p className="input-control">
                                <label id="contactDepartment">Contact Person's Department :</label>
                                {program.contact_department}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formprogramAddress">
                            <p className="input-control">
                                <label id="programAddress">Program Address :</label>
                                {program.program_address}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactPhone">
                            <p className="input-control">
                                <label htmlFor="contactPhone">Contact Person's Phone :</label>
                                {program.contact_phone}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactMobile">
                            <p className="input-control">
                                <label htmlFor="contactMobile">Contact Person's Mobile :</label>
                                {program.contact_mobile}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactEmail">
                            <p className="input-control">
                                <label htmlFor="contactEmail">Contact Person's Email :</label>
                                {program.contact_email}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formprogramWebsite">
                            <p className="input-control">
                            {program.program_website}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formIrcChannel">
                            <p className="input-control">
                                <label htmlFor="ircChannel">Irc Channel :</label>
                                {program.irc_channel}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formTags">
                            <p className="input-control">
                                <label htmlFor="tags">Tags :</label>
                                {program.tags.join(", ")}
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="status">Status :</label>
                                {program.status}
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formCreationDate">
                            <p className="input-control">
                                <label htmlFor="creationDate">Creation Date :</label>
                                {program.creation_date}
                            </p>
                        </form-group>
                        <div><br></br></div>
                    </form>
                </div>
            </div>
        </div>

    )
}
