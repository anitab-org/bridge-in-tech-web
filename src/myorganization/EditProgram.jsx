import React, { useState, useContext } from "react";
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
    const [errors, setErrors] = useState(null);
    const { access_token } = useContext(AuthContext);
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidMobile, setIsValidMobile] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleSubmit = async e => {
        e.preventDefault();

        let payload = {}
        new FormData(e.target).forEach((value, key) => {
            if (key === "organization_name" ||
                key === "representative_name" ||
                key === "creation_date")
                return;
            if (key === "target_skills" ||
                key === "student_responsibility" ||
                key === "mentor_responsibility" ||
                key === "organization_responsibility" ||
                key === "student_requirements" ||
                key === "mentor_requirements" ||
                key === "resources_provided" ||
                key === "tags"
            )
                value = value.split(",").map(item => item.trim());
            if (key === "payment_amount")
                value = parseInt(value);
                console.log(value)
            if (key === "start_date" ||
                key === "end_date" ||
                key === "creation_date")
                value = value.split("T").join(" ")
            console.log(payload)
            payload[key] = value;

        });

        const requestCreateProgram = {
            method: program ? "PUT" : "POST",
            headers: {
                "Authorization": `Bearer ${access_token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        };
        const parameter_url = program ? program.id : "program";
        fetch(`${BASE_API}/organizations/${organization.id}/programs/${parameter_url}`, requestCreateProgram)
            .then(async response => {
                let data = await response.json();
                if (response === 400 && data.errors) {
                    setErrors(data.errors);
                    console.log(JSON.stringify(data.errors));
                }
                setResponseMessage(data.message);
            })
            .catch(() =>
                setResponseMessage(SERVICE_UNAVAILABLE_ERROR)
            )
    }

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

    const startDateArray = program ? program.start_date.split(" ").map(item => item.trim()) : [];
    const endDateArray = program ? program.end_date.split(" ").map(item => item.trim()) : [];
    const creationDateArray = program ? program.creation_date.split(" ").map(item => item.trim()) : [];

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Program Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form className="program-form mx-auto" onSubmit={handleSubmit}>
                        <form-group controlId="formprogramName">
                            <p className="input-control">
                                <label id="programName">Program name :</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="programName"
                                    name="program_name"
                                    maxLength="100"
                                    defaultValue={program ? program.program_name : ""}
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
                                    defaultValue={organization.organization_name}
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
                                    defaultValue={organization.representative_name}
                                    disabled
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formStartDate">
                            <p className="input-control">
                                <label id="startDate">Start Date : (in {program? startDateArray[2] : "GMT+00:00"} timezone)</label>
                                <input className="field"
                                    aria-labelledby="startDate"
                                    type="datetime-local"
                                    name="start_date"
                                    defaultValue={program ? `${startDateArray[0]}T${startDateArray[1]}` : "YYYY-MM-DDT00:00"}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formEndDate">
                            <p className="input-control">
                                <label id="endDate">End Date : (in {program? endDateArray[2] : "GMT+00:00"} timezone)</label>
                                <input className="field"
                                    aria-labelledby="endDate"
                                    type="datetime-local"
                                    name="end_date"
                                    defaultValue={program ? `${endDateArray[0]}T${endDateArray[1]}` : "YYYY-MM-DDT00:00"}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formDescription">
                            <p className="input-control">
                                <label id="description">Description :</label>
                                <textarea className="field"
                                    type="description"
                                    aria-labelledby="description"
                                    name="description"
                                    maxLength="500"
                                    defaultValue={program ? program.description : ""}
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
                                    maxLength="150"
                                    defaultValue={program ? program.target_skills.join(", ") : ""}
                                    required
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateGender">Gender</label>
                                <select className="custom-select" name="target_candidate_gender">
                                    <option>{program ? program.target_candidate_gender : "Not Applicable"}
                                    </option>
                                    {GENDER.map((target_candidate_gender) => optionsWithDefaultSelection(target_candidate_gender, program ? program.target_candidate_gender : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateAge">Age</label>
                                <select className="custom-select" name="target_candidate_age">
                                    <option>{program ? program.target_candidate_age : "Not Applicable"}
                                    </option>
                                    {AGE.map((target_candidate_age) => optionsWithDefaultSelection(target_candidate_age, program ? program.target_candidate_age : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateEthnicity">Ethnicity</label>
                                <select className="custom-select" name="target_candidate_ethnicity">
                                    <option>{program ? program.target_candidate_ethnicity : "Not Applicable"}
                                    </option>
                                    {ETHNICITY.map((target_candidate_ethnicity) => optionsWithDefaultSelection(target_candidate_ethnicity, program ? program.target_candidate_ethnicity : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateSexualOrientation">Sexual Orientation</label>
                                <select className="custom-select" name="target_candidate_sexual_orientation">
                                    <option>{program ? program.target_candidate_sexual_orientation : "Not Applicable"}
                                    </option>
                                    {SEXUAL_ORIENTATION.map((target_candidate_sexual_orientation) => optionsWithDefaultSelection(target_candidate_sexual_orientation, program ? program.target_candidate_sexual_orientation : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateReligion">Religion</label>
                                <select className="custom-select" name="target_candidate_religion">
                                    <option>{program ? program.target_candidate_religion : "Not Applicable"}
                                    </option>
                                    {RELIGION.map((target_candidate_religion) => optionsWithDefaultSelection(target_candidate_religion, program ? program.target_candidate_religion : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidatePhysicalAbility">Physical Ability</label>
                                <select className="custom-select" name="target_candidate_physical_ability">
                                    <option>{program ? program.target_candidate_physical_ability : "Not Applicable"}
                                    </option>
                                    {PHYSICAL_ABILITY.map((target_candidate_physical_ability) => optionsWithDefaultSelection(target_candidate_physical_ability, program ? program.target_candidate_physical_ability : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateMentalAbility">Mental Ability</label>
                                <select className="custom-select" name="target_candidate_mental_ability">
                                    <option>{program ? program.target_candidate_mental_ability : "Not Applicable"}
                                    </option>
                                    {MENTAL_ABILITY.map((target_candidate_mental_ability) => optionsWithDefaultSelection(target_candidate_mental_ability, program ? program.target_candidate_mental_ability : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateSocioEconomic">Socio Economic</label>
                                <select className="custom-select" name="target_candidate_socio_economic">
                                    <option>{program ? program.target_candidate_socio_economic : "Not Applicable"}
                                    </option>
                                    {SOCIO_ECONOMIC.map((target_candidate_socio_economic) => optionsWithDefaultSelection(target_candidate_socio_economic, program ? program.target_candidate_socio_economic : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateHighestEducation">Highest Education</label>
                                <select className="custom-select" name="target_candidate_highest_education">
                                    <option>{program ? program.target_candidate_highest_education : "Not Applicable"}
                                    </option>
                                    {HIGHEST_EDUCATION.map((target_candidate_highest_education) => optionsWithDefaultSelection(target_candidate_highest_education, program ? program.target_candidate_highest_education : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="targetCandidateYearsOfExperience">Years of Experience</label>
                                <select className="custom-select" name="target_candidate_years_of_experience">
                                    <option>{program ? program.target_candidate_years_of_experience : "Not Applicable"}
                                    </option>
                                    {YEARS_OF_EXPERIENCE.map((target_candidate_years_of_experience) => optionsWithDefaultSelection(target_candidate_years_of_experience, program ? program.target_candidate_years_of_experience : "Not Applicable"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formOther">
                            <p className="input-control">
                                <label id="other">Other Target Candidate:</label>
                                <input className="field"
                                    type="text"
                                    aria-labelledby="other"
                                    name="target_candidate_other"
                                    defaultValue={program ? program.target_candidate_other : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formPaymentCurrency">
                            <p className="input-control">
                                <label id="paymentCurrency">Payment :</label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                <label id="paymentCurrency" className="input-group-text">Currency :</label>
                                <input className="input-control"
                                    type="text"
                                    aria-labelledby="paymentCurrency"
                                    name="payment_currency"
                                    maxLength="3"
                                    defaultValue={program ? program.payment_currency : ""}
                                />
                                </div>
                                <label id="paymentAmount" className="input-group-text">Amount :</label>

                                <input
                                    type="number"
                                    className="input-control"
                                    aria-labelledby="paymentAmount"
                                    name="payment_amount"
                                    min="0"
                                    step="1"
                                    defaultValue={program ? program.payment_amount : "0"}
                                />

                            </div>
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="contactType">Contact Type :</label>
                                <select className="custom-select" name="contact_type">
                                    <option>{program ? program.contact_type : "Remote"}
                                    </option>
                                    {CONTACT_TYPE.map((contact_type) => optionsWithDefaultSelection(contact_type, program ? program.contact_type : "Remote"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="zone">Zone :</label>
                                <select className="custom-select" name="zone">
                                    <option>{program ? program.zone : "Global"}
                                    </option>
                                    {ZONE.map((zone) => optionsWithDefaultSelection(zone, program ? program.zone : "Global"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formStudentResponsibility">
                            <p className="input-control">
                                <label id="studentResponsibility">Student Responsibility :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="studentResponsibility"
                                    name="student_responsibility"
                                    maxLength="250"
                                    defaultValue={program ? program.student_responsibility.join(", ") : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formMentorResponsibility">
                            <p className="input-control">
                                <label id="mentorResponsibility">Mentor Responsibility :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="mentorResponsibility"
                                    name="mentor_responsibility"
                                    maxLength="250"
                                    defaultValue={program ? program.mentor_responsibility.join(", ") : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formOrganizationResponsibility">
                            <p className="input-control">
                                <label id="organizationResponsibility">Organization Responsibility :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="organizationResponsibility"
                                    name="organization_responsibility"
                                    maxLength="250"
                                    defaultValue={program ? program.organization_responsibility.join(", ") : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formStudentRequirements">
                            <p className="input-control">
                                <label id="studentRequirements">Student Requirements :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="studentRequirements"
                                    name="student_requirements"
                                    maxLength="250"
                                    defaultValue={program ? program.student_requirements.join(", ") : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formMentorRequirements">
                            <p className="input-control">
                                <label id="mentorRequirements">Mentor Requirements :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="mentorRequirements"
                                    name="mentor_requirements"
                                    maxLength="250"
                                    defaultValue={program ? program.mentor_requirements.join(", ") : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formResourcesProvided">
                            <p className="input-control">
                                <label id="resourcesProvided">Resources Provided :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="resourcesProvided"
                                    name="resources_provided"
                                    maxLength="250"
                                    defaultValue={program ? program.resources_provided.join(", ") : ""}
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
                                    maxLength="50"
                                    defaultValue={program ? program.contact_name : ""}
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
                                    maxLength="150"
                                    defaultValue={program ? program.contact_department : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <form-group controlId="formprogramAddress">
                            <p className="input-control">
                                <label id="programAddress">Program Address :</label>
                                <textarea className="field"
                                    type="text"
                                    aria-labelledby="programAddress"
                                    name="program_address"
                                    maxLength="250"
                                    defaultValue={program ? program.program_address : ""}
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
                                    defaultValue={program ? program.contact_phone : ""}
                                    pattern="^[0-9\s\-\+]+$"
                                    maxLength="20"
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
                                    defaultValue={program ? program.contact_mobile : ""}
                                    pattern="^[0-9\s\-\+]+$"
                                    maxLength="20"
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
                                    defaultValue={program ? program.contact_email : ""}
                                    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                    maxLength="254"
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
                                    maxLength="254"
                                    defaultValue={program ? program.program_website : ""}
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
                                    maxLength="254"
                                    defaultValue={program ? program.irc_channel : ""}
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
                                    maxLength="150"
                                    defaultValue={program ? program.tags.join(", ") : ""}
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div className="input-group mb-3">
                            <p className="input-control">
                                <label htmlFor="status">Status :</label>
                                <select className="custom-select" name="status">
                                    <option>{program ? program.status : "Draft"}
                                    </option>
                                    {PROGRAM_STATUS.map((status) => optionsWithDefaultSelection(status, program ? program.status : "Draft"))}
                                </select>
                            </p>
                        </div>
                        <div><br></br></div>
                        <form-group controlId="formCreationDate">
                            <p className="input-control">
                                <label id="creationDate">Creation Date : (in {program? creationDateArray[2] : "GMT+00:00"} timezone)</label>
                                <input className="field"
                                    aria-labelledby="creationDate"
                                    type="datetime-local"
                                    name="creation_date"
                                    defaultValue={program ? `${creationDateArray[0]}T${creationDateArray[1]}` : "YYYY-MM-DDT00:00"}
                                    disabled
                                />
                            </p>
                        </form-group>
                        <div><br></br></div>
                        <div>
                            {errors ? <span className="error" name="response" aria-label="response" role="alert">{responseMessage}: {errors}</span> :
                                <span className="error" name="response" aria-label="response" role="alert">{responseMessage}</span>}
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
                                <div><br></br></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
