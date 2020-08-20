import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
    GENDER,
    AGE,
    ETHNICITY,
    SEXUAL_ORIENTATION,
    RELIGION,
    PHYSICAL_ABILITY,
    MENTAL_ABILITY,
    SOCIO_ECONOMIC,
    HIGHEST_EDUCATION,
    YEARS_OF_EXPERIENCE
} from "../backgrounds";
import { BASE_API } from "../config";
import { SERVICE_UNAVAILABLE_ERROR } from "../messages";
import { PROGRAM_STATUS, CONTACT_TYPE, ZONE } from "../enums";
import { AuthContext } from "../AuthContext";


export default function EditProgram() {
    const { state } = useLocation();
    const program = state.program;
    const organization = state.organization;
    const [responseMessage, setResponseMessage] = useState(null);
    const { access_token } = useContext(AuthContext);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidMobile, setIsValidMobile] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    
    const validatePhone = e => {
        setIsValidPhone(e.target.checkValidity());
    };

    const validateMobile = e => {
        setIsValidMobile(e.target.checkValidity());
    };
    const validateEmail = e => {
        setIsValidEmail(e.target.checkValidity());
    };
    const optionsWithDefaultSelection = (value, receivedValue) => {
        if (value === "GMT0" && !receivedValue) {
            return <option key={value} value={value} selected>{value}</option>
        }
        if (value === "Draft" && !receivedValue) {
            return <option key={value} value={value} selected>{value}</option>
        }
        return <option key={value} value={value}>{value}</option>
    };

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
                                <label id="programName">Program name :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="programName"
                                    name="program_name"
                                    defaultValue={program.program_name}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formOrganizationName">
                            <p className="input-control">
                                <label id="organizationName">Organization Name :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="organizationName"
                                    name="organization_name"
                                    defaultValue={program.organization_name}
                                    disabled
                                />
                            </p>
                        </form-group>
                        <form-group controlId="formRespresentativeName">
                            <p className="input-control">
                                <label id="representativeName">Representative name :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="representativeName"
                                    name="representative_name"
                                    defaultValue={program.representative_name}
                                    disabled
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formStartDate">
                            <p className="input-control">
                                <label id="startDate">Start Date :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="startDate"
                                    name="start_date"
                                    defaultValue={program.start_date}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formEndDate">
                            <p className="input-control">
                                <label id="endDate">End Date :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="endDate"
                                    name="end_date"
                                    defaultValue={program.end_date}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formDescription">
                            <p className="input-control">
                                <label id="description">Description :</label>
                                <input className="field"
                                    type="description"
                                    aria-labelledby="description"
                                    name="description"
                                    defaultValue={program.description}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formTargetSkills">
                            <p className="input-control">
                                <label id="targetSkills">Target Skills :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="targetSkills"
                                    name="target_skills"
                                    defaultValue={program.target_skills}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateGender">Gender</label>
                                <select className="custom-select" name="target_candidate_gender">
                                    <option>{program.target_candidate_gender}
                                    </option>
                                    {GENDER.map((target_candidate_gender) => optionsWithDefaultSelection(target_candidate_gender, program.target_candidate_gender))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateAge">Age</label>
                                <select className="custom-select" name="target_candidate_age">
                                    <option>{program.target_candidate_age}
                                    </option>
                                    {AGE.map((target_candidate_age) => optionsWithDefaultSelection(target_candidate_age, program.target_candidate_age))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateEthnicity">Ethnicity</label>
                                <select className="custom-select" name="target_candidate_ethnicity">
                                    <option>{program.target_candidate_ethnicity}
                                    </option>
                                    {ETHNICITY.map((target_candidate_ethnicity) => optionsWithDefaultSelection(target_candidate_ethnicity, program.target_candidate_ethnicity))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateSexualOrientation">Sexual Orientation</label>
                                <select className="custom-select" name="target_candidate_sexual_orientation">
                                    <option>{program.target_candidate_sexual_orientation}
                                    </option>
                                    {SEXUAL_ORIENTATION.map((target_candidate_sexual_orientation) => optionsWithDefaultSelection(target_candidate_sexual_orientation, program.target_candidate_sexual_orientation))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateReligion">Religion</label>
                                <select className="custom-select" name="target_candidate_religion">
                                    <option>{program.target_candidate_religion}
                                    </option>
                                    {RELIGION.map((target_candidate_religion) => optionsWithDefaultSelection(target_candidate_religion, program.target_candidate_religion))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidatePhysicalAbility">Physical Ability</label>
                                <select className="custom-select" name="target_candidate_physical_ability">
                                    <option>{program.target_candidate_physical_ability}
                                    </option>
                                    {PHYSICAL_ABILITY.map((target_candidate_physical_ability) => optionsWithDefaultSelection(target_candidate_physical_ability, program.target_candidate_physical_ability))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateMentalAbility">Mental Ability</label>
                                <select className="custom-select" name="target_candidate_mental_ability">
                                    <option>{program.target_candidate_mental_ability}
                                    </option>
                                    {MENTAL_ABILITY.map((target_candidate_mental_ability) => optionsWithDefaultSelection(target_candidate_mental_ability, program.target_candidate_mental_ability))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateSocioEconomic">Socio Economic</label>
                                <select className="custom-select" name="target_candidate_socio_economic">
                                    <option>{program.target_candidate_socio_economic}
                                    </option>
                                    {SOCIO_ECONOMIC.map((target_candidate_socio_economic) => optionsWithDefaultSelection(target_candidate_socio_economic, program.target_candidate_socio_economic))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateHighestEducation">Highest Education</label>
                                <select className="custom-select" name="target_candidate_highest_education">
                                    <option>{program.target_candidate_highest_education}
                                    </option>
                                    {HIGHEST_EDUCATION.map((target_candidate_highest_education) => optionsWithDefaultSelection(target_candidate_highest_education, program.target_candidate_highest_education))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateYearsOfExperience">Years of Experience</label>
                                <select className="custom-select" name="target_candidate_years_of_experience">
                                    <option>{program.target_candidate_years_of_experience}
                                    </option>
                                    {YEARS_OF_EXPERIENCE.map((target_candidate_years_of_experience) => optionsWithDefaultSelection(target_candidate_years_of_experience, program.target_candidate_years_of_experience))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formOther">
                            <p className="input-control">
                                <label id="other">Other :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="other"
                                    name="other"
                                    defaultValue={program.other}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPaymentCurrency">
                            <p className="input-control">
                                <label id="paymentCurrency">Payment Currency :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="paymentCurrency"
                                    name="payment_currency"
                                    defaultValue={program.payment_currency}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPaymentAmount">
                            <p className="input-control">
                                <label id="paymentAmount">Payment Amount :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="paymentAmount"
                                    name="payment_amount"
                                    defaultValue={program.payment_amount}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="contactType">Contact Type :</label>
                                <select className="custom-select" name="contact_type">
                                    <option>{program.contact_type}
                                    </option>
                                    {CONTACT_TYPE.map((contact_type) => optionsWithDefaultSelection(contact_type, program.contact_type))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="zone">Zone :</label>
                                <select className="custom-select" name="zone">
                                    <option>{program.zone}
                                    </option>
                                    {ZONE.map((zone) => optionsWithDefaultSelection(zone, program.zone))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formStudentResponsibility">
                            <p className="input-control">
                                <label id="studentResponsibility">Student Responsibility :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="studentResponsibility"
                                    name="student_responsibility"
                                    defaultValue={program.student_responsibility}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formMentorResponsibility">
                            <p className="input-control">
                                <label id="mentorResponsibility">Mentor Responsibility :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="mentorResponsibility"
                                    name="mentor_responsibility"
                                    defaultValue={program.mentor_responsibility}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formOrganizationResponsibility">
                            <p className="input-control">
                                <label id="organizationResponsibility">Organization Responsibility :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="organizationResponsibility"
                                    name="organization_responsibility"
                                    defaultValue={program.organization_responsibility}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formStudentRequirements">
                            <p className="input-control">
                                <label id="studentRequirements">Student Requirements :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="studentRequirements"
                                    name="student_requirements"
                                    defaultValue={program.student_requirements}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formMentorRequirements">
                            <p className="input-control">
                                <label id="mentorRequirements">Mentor Requirements :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="mentorRequirements"
                                    name="mentor_requirements"
                                    defaultValue={program.mentor_requirements}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formResourcesProvided">
                            <p className="input-control">
                                <label id="resourcesProvided">Resources Provided :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="resourcesProvided"
                                    name="resources_provided"
                                    defaultValue={program.resources_provided}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactName">
                            <p className="input-control">
                                <label id="contactName">Contact Person's Name :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="contactName"
                                    name="contact_name"
                                    defaultValue={program.contact_name}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactDepartment">
                            <p className="input-control">
                                <label id="contactDepartment">Contact Person's Department :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="contactDepartment"
                                    name="contact_department"
                                    defaultValue={program.contact_department}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formprogramAddress">
                            <p className="input-control">
                                <label id="programAddress">Program Address :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="programAddress"
                                    name="program_address"
                                    defaultValue={program.program_address}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactPhone">
                            <p className="input-control">
                                <label htmlFor="contactPhone">Contact Person's Phone :</label>
                                <input className="field"
                                    type="text"
                                    name="contact_phone"
                                    defaultValue={program.contact_phone}
                                    pattern="^[0-9\s\-\+]+$"
                                    onChange={validatePhone}
                                />
                            </p>
                            {!isValidPhone && (
                                <span className="error">
                                    Must only contain numbers between 0-9, may start with plus "+" before country code, and may have dash "-"
                                </span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactMobile">
                            <p className="input-control">
                                <label htmlFor="contactMobile">Contact Person's Mobile :</label>
                                <input className="field"
                                    type="text"
                                    name="contact_mobile"
                                    defaultValue={program.contact_mobile}
                                    pattern="^[0-9\s\-\+]+$"
                                    onChange={validateMobile}
                                />
                            </p>
                            {!isValidMobile && (
                                <span className="error">
                                    Must only contain numbers between 0-9, may start with plus "+" before country code, and may have dash "-"
                                </span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formContactEmail">
                            <p className="input-control">
                                <label htmlFor="contactEmail">Contact Person's Email :</label>
                                <input className="field"
                                    type="email"
                                    name="contact_email"
                                    defaultValue={program.contact_email}
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    onChange={validateEmail}
                                    required
                                />
                            </p>
                            {!isValidEmail && (
                                <span className="error">Must match standard email format xxx@xxx.xxx</span>
                            )}
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formprogramWebsite">
                            <p className="input-control">
                                <label htmlFor="programWebsite">Program Website :</label>
                                <input className="field"
                                    type="url"
                                    name="program_website"
                                    defaultValue={program.program_website}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formIrcChannel">
                            <p className="input-control">
                                <label htmlFor="ircChannel">Irc Channel :</label>
                                <input className="field"
                                    type="url"
                                    name="irc_channel"
                                    defaultValue={program.irc_channel}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formTags">
                            <p className="input-control">
                                <label htmlFor="tags">Tags :</label>
                                <input className="field"
                                    type="text"
                                    name="tags"
                                    defaultValue={program.tags}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="status">Status :</label>
                                <select className="custom-select" name="status">
                                    <option>{program.status}
                                    </option>
                                    {PROGRAM_STATUS.map((status) => optionsWithDefaultSelection(status, program.status))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formCreationDate">
                            <p className="input-control">
                                <label htmlFor="creationDate">Creation Date :</label>
                                <input className="field"
                                    type="text"
                                    name="creation_date"
                                    defaultValue={program.creation_date}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div>
                            {responseMessage && <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
                        </div>
                        <div className="row">
                            <div className="col-sm-6 offset-sm-9">
                                <button className="btn btn-success"
                                    variant="success"
                                    type="submit"
                                    name="submit"
                                    value="Save"
                                >Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
