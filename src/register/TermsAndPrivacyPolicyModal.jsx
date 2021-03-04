import React, { useState } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";

const TermsAndPrivacyPolicyModal = ({ show, handleClose }) => {
  const [activeKey, setActiveKey] = useState("code-of-conduct");
  return (
    <Modal className="terms-and-privacy-modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Tabs activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Tab eventKey="code-of-conduct" title="Code of Conduct">
            <br />
            <h4>1. Purpose</h4>
            <p>
              A primary goal of AnitaB.org Open Source is to be inclusive to the
              largest number of contributors, with the most varied and diverse
              backgrounds possible. As such, we are committed to providing a
              friendly, safe and welcoming environment for all, regardless of
              gender, sexual orientation, ability, ethnicity, socioeconomic
              status, and religion (or lack thereof). This code of conduct
              outlines our expectations for all those who participate in our
              community, as well as the consequences for unacceptable behavior.
              We invite all those who participate in open source contributions
              to help us create safe and positive experiences for everyone.
            </p>
            <h4>2. Open Source Citizenship</h4>
            <p>
              A supplemental goal of this Code of Conduct is to increase open
              source citizenship by encouraging participants to recognize and
              strengthen the relationships between our actions and their effects
              on our community. Communities mirror the societies in which they
              exist and positive action is essential to counteract the many
              forms of inequality and abuses of power that exist in society. If
              you see someone who is making an extra effort to ensure our
              community is welcoming, friendly, and encourages all participants
              to contribute to the fullest extent, we want to know.
            </p>
            <h4>3. Expected Behavior</h4>
            <p>
              The following behaviors are expected and requested of all
              community members: Participate in an authentic and active way. In
              doing so, you contribute to the health and longevity of this
              community. Exercise consideration and respect in your speech and
              actions. Attempt collaboration before conflict. Refrain from
              demeaning, discriminatory, or harassing behavior and speech. Be
              mindful of your surroundings and of your fellow participants.
              Alert community leaders if you notice a dangerous situation,
              someone in distress, or violations of this Code of Conduct, even
              if they seem inconsequential. Remember that community event venues
              may be shared with members of the public; please be respectful to
              all patrons of these locations.
            </p>
            <h4>4. Unacceptable Behavior</h4>
            <p>
              The following behaviors are considered harassment and are
              unacceptable within our community:
            </p>
            <ul>
              <li>
                Violence, threats of violence or violent language directed
                against another person.
              </li>
              <li>
                {" "}
                Sexist, racist, homophobic, transphobic, ableist or otherwise
                discriminatory jokes and language.
              </li>
              <li>
                {" "}
                Posting or displaying sexually explicit or violent material.
              </li>
              <li>
                {" "}
                Posting or threatening to post other people’s personally
                identifying information ("doxing").
              </li>
              <li>
                Personal insults, particularly those related to gender, sexual
                orientation, race, religion, or disability.
              </li>
              <li>Inappropriate photography or recording.</li>
              <li>
                Inappropriate physical contact. You should have someone’s
                consent before touching them.
              </li>
              <li>
                Unwelcome sexual attention. This includes, sexualized comments
                or jokes; inappropriate touching, groping, and unwelcomed sexual
                advances.
              </li>
              <li>
                Deliberate intimidation, stalking or following (online or in
                person).
              </li>
              <li>
                Advocating for, or encouraging, any of the above behavior.
              </li>
              <li>
                Sustained disruption of community events, including talks and
                presentations.
              </li>
            </ul>
            <h4>5. Consequences of Unacceptable Behavior</h4>
            <p>
              Unacceptable behavior from any community member, including
              sponsors and those with decision-making authority, will not be
              tolerated. Anyone asked to stop unacceptable behavior is expected
              to comply immediately. If a community member engages in
              unacceptable behavior, the community admins may take any action
              they deem appropriate, up to and including a temporary ban or
              permanent expulsion from the community without warning (and
              without refund in the case of a paid event).
            </p>
            <h4>6. Reporting Guidelines</h4>
            <p>
              If you are subject to or witness unacceptable behavior, or have
              any other concerns, please notify a community admin as soon as
              possible by emailing{" "}
              <a href="mailto:opensource@anitab.org">opensource@anitab.org</a>.
              Please read{" "}
              <a href="https://github.com/anitab-org/documentation/blob/master/Contributing/reporting_guidelines.md">
                Reporting Guidelines
              </a>{" "}
              for details. Additionally, community admins are available to help
              community members engage with local law enforcement or to
              otherwise help those experiencing unacceptable behavior feel safe.
              In the context of in-person events, community admins (or event
              managers) will also provide escorts as desired by the person
              experiencing distress.
            </p>
            <h4>7. Addressing Grievances</h4>
            <p>
              Only permanent resolutions (such as bans) may be appealed. To
              appeal a decision of the working group, contact AnitaB.org staff
              at{" "}
              <a href="mailto:opensource@anitab.org">opensource@anitab.org</a>{" "}
              with your appeal and we will review the case.
            </p>
            <h4>8. Scope</h4>
            <p>
              We expect all community participants (contributors, paid or
              otherwise; sponsors; and other guests) to abide by this Code of
              Conduct in all community venues–online and in-person–as well as in
              all one-on-one communications pertaining to community business.
              This code of conduct and its related procedures also applies to
              unacceptable behavior occurring outside the scope of community
              activities when such behavior has the potential to adversely
              affect the safety and well-being of community members.
            </p>
            <h4>9. Contact info</h4>
            <p>
              <a href="mailto:opensource@anitab.org">opensource@anitab.org</a>
            </p>
            <h4>10. License and attribution</h4>
            <p>
              This Code of Conduct is distributed under a{" "}
              <a href="http://creativecommons.org/licenses/by-sa/3.0/">
                Creative Commons Attribution-ShareAlike license
              </a>
              . Portions of text derived from the{" "}
              <a href="https://www.djangoproject.com/conduct/">
                Django Code of Conduct
              </a>{" "}
              and the{" "}
              <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
                Geek Feminism Anti-Harassment Policy
              </a>
              . Retrieved on November 22, 2016 from{" "}
              <a href="http://citizencodeofconduct.org/">
                http://citizencodeofconduct.org/
              </a>
            </p>
          </Tab>
          <Tab eventKey="terms" title="Terms">
            <br />
            <p>
              Welcome to the AnitaB.org web sites (the “Sites”). The Sites
              include AnitaB.org, Systers.org, GHC.AnitaB.org, and any other web
              sites or services available through such sites owned or operated
              by AnitaB.org. Please review the following terms and conditions
              concerning your use of the Sites. By accessing, using or
              downloading any information and/or materials from the Sites, you
              represent that you are at least 13 years of age and agree to
              follow and be bound by these terms of use (the “Terms of Use”). If
              you do not agree with these Terms of Use, please do not use the
              Sites. These Terms of Use may be updated by AnitaB.org from time
              to time without notice to you. In addition, when using particular
              AnitaB.org services, you shall be subject to any posted guidelines
              or rules applicable to such services which may be posted from time
              to time. All such guidelines or rules are incorporated by
              reference into these Terms of Use. AnitaB.org may also offer other
              services that are governed by different Terms of Service. Certain
              additional terms governing the Systers.org site (“Systers Site”)
              are set forth below and on the Systers Site, including the Systers
              FAQs.
            </p>
            <h4>Privacy Policy</h4>
            <p>
              Your use of the Sites is subject to the AnitaB.org Privacy Policy,
              which contains disclosures relating to the collection and use of
              your personal information. You understand that through your use of
              the Service you consent to the collection and use (as set forth in
              the Privacy Policy) of this information, including the transfer of
              this information to the United States and/or other countries for
              storage, processing, and use by AnitaB.org and its affiliates.
            </p>
            <h4>Registration</h4>
            <p>
              By using the Sites, you represent that you are at least 13 years
              of age. Where the Sites enable you to register for particular
              service offerings, you agree to: (a) provide true, accurate,
              current and complete information about yourself as prompted by the
              Site registration form (such information being the “Registration
              Data”) and (b) we ask that you endeavor maintain and promptly
              update the Registration Data to keep it true, accurate, current
              and complete. If you provide any information that is untrue,
              inaccurate, not current or incomplete, or AnitaB.org has
              reasonable grounds to suspect that such information is untrue,
              inaccurate, not current or incomplete, AnitaB.org, its employees
              or designees shall have has the right to suspend or terminate your
              account and refuse any and all current or future use of the Sites
              (or any portion thereof). Without limiting the foregoing,
              AnitaB.org and its designees reserve the right to remove you or
              other User Content from the Systers Lists for any reason it deems
              necessary, including but not limited to, the posting information
              that is off topic, the sharing information outside of the Systers
              Lists, or any other act in violation of the Systers FAQs. You will
              receive a password and account designation upon completing the
              registration process. You are responsible for maintaining the
              confidentiality of the passwords and accounts, and are fully
              responsible for all activities that occur under your passwords or
              accounts. You agree to (a) immediately notify AnitaB.org of any
              unauthorized use of your passwords or accounts or any other breach
              of security, and (b) ensure that you exit from your account at the
              end of each session. AnitaB.org cannot and will not be liable for
              any loss or damage arising from your failure to comply with this
              Section. The Systers Site provides one or more email forums or
              listservs for members (“Systers Lists”). A password protected
              account is provided for subscribers of the Systers Site to access
              this forum. If the password is no longer secure, the subscriber
              will find instructions for changing her password at{" "}
              <a href="http://www.Systers.org/faq.html">
                http://www.Systers.org/faq.html
              </a>
            </p>
            <h4>Use of the Sites</h4>
            <p>
              The Sites are intended to create a friendly environment for you to
              express your thoughts and learn from others, and in order to
              maintain this objective Your right to use and access these Sites
              is limited to your personal, non-commercial, viewing purposes. As
              a condition of your use of the Site, you will not use the Site for
              any purpose that is unlawful or prohibited by these Terms of Use.
              You may not use the Site in any manner that could damage, disable,
              overburden, or impair any Site or interfere with any other party’s
              use and enjoyment of any Site. You may not attempt to gain
              unauthorized access to any Site, other accounts, computer systems
              or networks connected to any Site, through hacking, password
              mining or any other means. You may not obtain or attempt to obtain
              any materials or information through any means not intentionally
              made available through the Site. Except for User Content, all
              information, data, text, photographs, graphics, video, messages or
              other materials available or accessible on the Sites (“AnitaB.org
              Content”) are owned by AnitaB.org or its licensors. You may
              download one copy of the AnitaB.org Content on any single computer
              for your personal, non-commercial use only, provided you keep
              intact all copyright and other proprietary notices. Except as
              expressly provided above nothing contained herein shall be
              construed as conferring any license or right to any AnitaB.org
              Content.
            </p>
            <h4>User Content</h4>
            <p>
              Where the Sites enable you to submit or post content, You
              understand that all information, data, text, software, music,
              sound, photographs, graphics, video, messages or other materials
              (“User Content”), whether publicly posted or privately
              transmitted, are the sole responsibility of the person from whom
              such User Content originated. This means that you, and not
              AnitaB.org, are entirely responsible for all User Content that you
              upload, post, email, transmit or otherwise make available via the
              Sites. AnitaB.org does not control and is not responsible the User
              Content posted via the Sites. Under no circumstances will
              AnitaB.org be liable in any way for any User Content. Children
              under the age of 13 are not authorized to submit User Content.
              AnitaB.org does not claim ownership of User Content you submit to
              AnitaB.org or make available for inclusion on the Sites. By
              providing such User Content to AnitaB.org, you hereby grant and
              agree that AnitaB.org shall have a non-exclusive, transferable,
              royalty free, fully-paid up, irrevocable, perpetual, worldwide
              right and license to copy, use, make derivative words of, display,
              distribute any otherwise exploit all User Content and all
              intellectual property rights therein. AnitaB.org shall be free to
              use and/or disseminate such User Content on an unrestricted basis
              for any purpose. You acknowledge that you are responsible for the
              User Content that you provide, and that you, not AnitaB.org, have
              full responsibility for the Submissions, including their legality
              and copyright. Notwithstanding the foregoing, User Content
              submitted by members through the Systers Site and Systers Lists
              for purposes of participating in the email forums are made
              available by AnitaB.org solely through such listservs to other
              Systers members, and to the moderators and maintainers of the
              lists and AnitaB.org personnel and are subject to any additional
              rules and guidelines set forth on the Systers Site. You
              acknowledge that AnitaB.org may or may not pre-screen User
              Content, but that AnitaB.org and its designees shall have the
              right (but not the obligation) in their sole discretion to pre-
              screen, refuse, or delete any User Content. Without limiting the
              foregoing, AnitaB.org and its designees shall have the right to
              remove any User Content that violates these Terms of Use or is
              otherwise objectionable. You acknowledge, consent and agree that
              AnitaB.org may access, preserve, and disclose your account
              information and User Content if required to do so by law or in a
              good faith belief that such access preservation or disclosure is
              reasonably necessary to: (a) comply with legal process; (b)
              enforce the Terms of Use; (c) respond to claims that any User
              Content violates the rights of third-parties; (d) respond to your
              requests; or (e) protect the rights, property, or personal safety
              of AnitaB.org, its users and the public.
            </p>
            <h4>Act</h4>
            <p>
              It is AnitaB.org policy to respond to notices of alleged copyright
              infringement that comply with the Digital Millennium Copyright
              Act. For more information, please go to our{" "}
              <a href="https://www.copyright.gov/legislation/dmca.pdf">
                DMCA Notification Guidelines
              </a>
              . AnitaB.org will promptly terminate without notice your access to
              the Sites if you are determined by AnitaB.org to be a “repeat
              infringer.” A repeat infringer is a user who has been notified by
              AnitaB.org of infringing activity violations more than twice
              and/or who has had User Content or any other user-submitted
              content removed from the Sites more than twice.
            </p>
            <h4>Acceptable Use</h4>
            <p>
              You will not engage in activities on the Sites and on the services
              available through the Sites, including the Systers Site and
              Systers Lists, and specifically you will not submit User Content,
              that:
              <ul>
                <li>
                  i. infringes any party’s copyright, trademark, trade secret or
                  other intellectual property or proprietary rights (and by
                  submitting User Content you represent to AnitaB.org that you
                  are the rightful owner of such material or that you have first
                  obtained permission to submit the material from the rightful
                  owner);
                </li>

                <li>
                  ii. constitutes (or encourages conduct that would constitute)
                  a criminal offense, gives rise to civil liability or otherwise
                  violates any local, state, national or international law or
                  may create liability for AnitaB.org to lose (in whole or in
                  part) the services of our ISPs or other suppliers;
                </li>

                <li>
                  iii. is content that AnitaB.org considers to be disruptive,
                  unlawful, harmful, threatening, abusive, harassing,
                  defamatory, vulgar, obscene, pornographic, sexually explicit,
                  hateful, racially, ethnically or otherwise objectionable;
                </li>

                <li>
                  iv. impersonates or claims the identity, characteristics or
                  qualifications of any other person or entity; or falsely state
                  or otherwise misrepresent your affiliation with a person or
                  entity or are false, inaccurate or misleading;
                </li>

                <li>
                  v. is for commercial purposes or contain advertising or are
                  intended to solicit a person to buy or sell services or to
                  make donations, including “spam” or any other form of
                  solicitation or promotion, or link to, directly or indirectly,
                  any sites that violate the restrictions set forth herein;
                </li>

                <li>
                  vi. contains any virus or other harmful component or otherwise
                  disrupt the normal flow of communication in or operation of
                  the Sites in any way; or
                </li>

                <li>
                  vii. is defamatory, obscene or unlawful, or an invasion of
                  privacy or publicity rights or any other third party rights.
                </li>
              </ul>
            </p>
            <h4>MODIFICATION AND TERMINATION OF SITES</h4>
            <p>
              AnitaB.org reserves the right at any time to modify or
              discontinue, temporarily or permanently, the Sites (or any part of
              it) with or without notice. You agree that AnitaB.org shall not be
              liable to you or to any third party for any modification,
              suspension or discontinuance of the Sites. AnitaB.org may also
              make improvements and/or changes in the products, services and/or
              the programs described in these Sites at any time without notice.
              However, AnitaB.org disclaims any responsibility to update,
              improve or change these Sites.
            </p>
            <h4>OTHER SITES AND RESOURCES</h4>
            <p>
              The Sites may include links to other Sites and resources. Because
              the AnitaB.org has no control over such sites and resources, you
              acknowledge and agree that the AnitaB.org is not responsible for
              the availability of such sites or resources, and does not endorse
              and is not responsible or liable for any content, advertising,
              products, or other materials on or available from such sites or
              resources. You further acknowledge and agree that the AnitaB.org
              shall not be responsible or liable, directly or indirectly, for
              any damage or loss caused or alleged to be caused by or in
              connection with use of or reliance on any such content, goods or
              Sites available on or through any such site or resource.
            </p>
            <h4>INTERNATIONAL USE</h4>
            <p>
              By choosing to access the Sites from any location other than the
              United States, you accept full responsibility for compliance with
              all local laws that are applicable. The AnitaB.org makes no
              representation that materials on the Sites are appropriate or
              available for use in locations outside the United States, and
              accessing them from territories where such activity is illegal is
              strictly prohibited.
            </p>
            <h4>DISCLAIMER OF WARRANTIES</h4>
            <p>
              THE INFORMATION ON THIS SITES IS PROVIDED “AS-IS” WITHOUT WARRANTY
              OF ANY KIND, EITHER EXPRESSED OR IMPLIED, STATUTORY OR OTHERWISE,
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTY OF FITNESS FOR A
              PARTICULAR PURPOSE, NON-INFRINGEMENT AND MERCHANTABILITY. YOU
              EXPRESSLY UNDERSTAND AND AGREE THAT: (a) YOUR USE OF THE SITES IS
              AT YOUR SOLE RISK. THE SITES ARE PROVIDED ON AN “AS IS” AND “AS
              AVAILABLE” BASIS; (b) ANITAB.ORG MAKES NO WARRANTY THAT (i) THE
              SITES WILL MEET YOUR REQUIREMENTS, (ii) THE SITES WILL BE
              UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE
              INFORMATION THAT MAY BE OBTAINED FROM THE USE OF THE SITES WILL BE
              ACCURATE OR RELIABLE; (c) ANY MATERIAL OBTAINED THROUGH THE USE OF
              THE SITES IS OBTAINED AND USED AT YOUR SOLE RISK AND DISCRETION
              AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER
              SYSTEM OR LOSS OF DATA; AND (d) NO ADVICE OR INFORMATION, WHETHER
              ORAL OR WRITTEN, OBTAINED BY YOU THROUGH OR FROM THE SITES SHALL
              CREATE ANY WARRANTY BY AnitaB.org.
            </p>
            <h4>LIMITATION OF LIABILITY</h4>
            <p>
              YOU EXPRESSLY UNDERSTAND AND AGREE THAT AnitaB.org OR ANY OTHER
              PARTY INVOLVED IN CREATING, PRODUCING OR DISTRIBUTING THE SITES
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO,
              DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER
              INTANGIBLE LOSSES (EVEN IF THE AnitaB.org HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (i) THE USE OR THE
              INABILITY TO USE THE SITES; (ii) UNAUTHORIZED ACCESS TO OR
              ALTERATION OF YOUR TRANSMISSIONS OR DATA; (iii) STATEMENTS OR
              CONDUCT OF ANY THIRD PARTY ON THE SITES; OR (iv) ANY OTHER MATTER
              RELATING TO THE SITES. IN NO EVENT SHALL THE LIABILITY OF
              ANITAB.ORG TO YOU EXCEED ONE HUNDRED DOLLARS ($100). SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR
              THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
              CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS
              MAY NOT APPLY TO YOU.
            </p>
            <h4>INDEMNITY</h4>
            <p>
              You agree to indemnify and hold AnitaB.org, and its affiliates,
              and their respective directors, officers, volunteers and
              employees, harmless from any claim or demand, including reasonable
              attorneys’ fees, made by any third party due to or arising out of
              your use of our site, your violation of the Terms of Use, or your
              violation of any rights of another person or entity, or any claim
              alleging any of the foregoing.
            </p>
            <h4>Notices</h4>
            <p>
              Notices to you may be made via either email or regular mail.
              AnitaB.org may also provide notices of changes to this Terms of
              Use or the Sites by displaying notices or links to notices to you
              generally on the Sites.
            </p>
            <h4>General</h4>
            <p>
              This Terms of Use constitutes the entire agreement between you and
              AnitaB.org with respect to the Sites and supersedes all prior
              agreements and understandings between you and AnitaB.org. The
              failure of AnitaB.org to enforce any provision of this Terms of
              Use will not be construed as a waiver of any provision or right.
              In the event that a portion of this Terms of Use is held
              unenforceable, the unenforceable portion will be construed in
              accordance with applicable law as nearly as possible to reflect
              the original intentions of the parties, and the remainder of the
              provisions will remain in full force and effect. This Terms of Use
              shall be governed by the laws of the State of California without
              regard to its conflict of law provisions. Both parties submit to
              personal jurisdiction in California and further agree that any
              cause of action relating to this Terms of Use shall be brought in
              a court in Santa Clara County, California.
            </p>
            <p>Last Updated: October 2, 2017</p>
          </Tab>
          <Tab eventKey="privacy-policy" title="Privacy Policy">
            <br />
            <p>
              Your privacy is important, so the Anita Borg Institute for Women
              and Technology (“AnitaB.org”) has created the following Privacy
              Policy to let you know what information we collect when you visit
              our Site(s) (as defined below), use our online services, or
              otherwise engage with us, and why we collect this information and
              how it is used.
            </p>
            <h4>Your Consent To This Privacy Policy</h4>
            <p>
              By using the Site(s), you expressly consent to the information
              handling practices described in this Privacy Policy. If you do not
              want information about you to be used in the manner set forth in
              this Privacy Policy, please do not use the Site(s). This is our
              entire and exclusive Privacy Policy and it supersedes any earlier
              version. This Privacy Policy is incorporated into by reference and
              made a part of our Terms of Use for the Sites. We may periodically
              make changes to this Privacy Policy that we will include on this
              page. The effective date at the top of this page indicates the
              date of the most current Privacy Policy in effect. It is your
              responsibility to review this Privacy Policy frequently and remain
              informed about any changes to it, so we encourage you to visit
              this page often. Your continued use of the Site(s) constitutes
              your agreement to this Privacy Policy and any future revisions.
              AnitaB.org shall not be liable for any damages You may suffer as a
              result of its failure to provide you notice of any changes to this
              Privacy Policy as set forth herein. If you would like to be
              notified when this Privacy Policy is updated, please contact us by
              email at{" "}
              <a href="mailto:Privacy@AnitaB.org">Privacy@AnitaB.org</a> or by
              postal mail at Privacy Director, Anita Borg Institute for Women
              and Technology, 1301 Shoreway Road, Suite 425, Belmont, CA 94002.
            </p>
            <h4>Scope of Policy</h4>
            <p>
              This Privacy Policy explains the data collection and use practices
              of anitaborg.org, anitab.org, systers.org and any other websites
              or services, available through such sites, owned or operated by
              AnitaB.org (each a “Site” and, collectively, the “Sites”). This
              Privacy Policy does not apply to third-party sites with which
              AnitaB.org may be affiliated. Please consult the privacy policies
              of such third-party sites. Certain additional terms governing
              privacy on the Systers.org site (“Systers Site”) and
              restricted-access e-mail discussion lists, now or in the future
              (the “Systers Lists”) are set forth on the{" "}
              <a href="http://systers.org/mailman/listinfo/systers">
                Systers List FAQs
              </a>{" "}
              and below. AnitaB.org only provides information to third-parties
              that is necessary to successfully achieve the purpose for which
              the information was collected.
            </p>
            <h4>Your Rights</h4>
            <p>
              AnitaB.org is committed to honoring your privacy rights as
              follows:
            </p>
            <ul>
              <li>Right of access to your personal information</li>
              <li>
                Right to rectification of personal information help where it is
                incorrect or incomplete
              </li>
              <li>
                Right of erasure of personal information (the “right to be
                forgotten”) if certain grounds are met
              </li>
              <li>
                Right to restrict or suspend the processing of personal
                information
              </li>
              <li>
                Right to complain to a supervisory authority should you believe
                your personal information is being misused
              </li>
              <li>
                Right of data portability (if processing is based on consent and
                automated means)
              </li>
              <li>
                Right to withdraw consent at any time (if processing is based on
                consent)
              </li>
              <li>
                Right to object to processing (if processing is based on
                legitimate interests)
              </li>
              <li>
                Right to object to processing of personal information for direct
                marketing purposes
              </li>
            </ul>
            <h4>What Information Is Collected?</h4>
            <p>
              Personal information means any information that may be used to
              identify an individual, including an individual’s first and last
              name, password, home or other physical address, an email address,
              phone number or other contact information. You may provide
              personal information to AnitaB.org in connection with making a
              donation to AnitaB.org. We call personal information directly
              associated with donations “Donor Information.” Except with your
              explicit permission, we will not sell, share or trade Donor
              Information with any third party, nor send mailings using Donor
              information on behalf of other organizations. To the extent any
              Donor Information is processed through a third-party service
              provider, Donor Information will only be used for purposes
              necessary to process that activity. Depending on how you initiate
              contact with AnitaB.org, we may ask you for any of the following
              information:
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Country of residence</li>
                <li>Date of birth</li>
                <li>Company affiliation</li>
                <li>Career level</li>
                <li>Information typically included on a resume</li>
                <li>
                  Payment processing information such as credit card number,
                  postal code, and bank account information
                </li>
                <li>Gender</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Age</li>
                <li>Organization/Company</li>
                <li>Professional Title</li>
                <li>Professional Affiliation</li>
                <li>Education</li>
                <li>Racial Identity</li>
                <li>Food Allergies</li>
                <li>Special Accomodations</li>
              </ul>
              Generally, the information you provide when interacting with
              AnitaB.org is optional, but some information may be required in
              order for a particular process, transaction, or other interaction
              to properly execute. AnitaB.org may be unable to provide you with
              certain products or services should you elect not to share
              information that we require to be collected for a particular
              purpose. If you have questions about what information we will
              require to be collected for a particular purpose, please contact
              us at <a href="mailto:Privacy@AnitaB.org">Privacy@AnitaB.org</a>.
              AnitaB.org also automatically receives and records information on
              our server logs from your browser, including your IP address,
              information contained in or conveyed by cookies and other similar
              technology (as described below), and the page you request through
              automated a metrics platform such as Google Analytics. This
              information is automatically logged through these services and
              will not be connected to your personal information by AnitaB.org
              for any reason. AnitaB.org may also collect certain personal
              information or other information that you voluntarily disclosed,
              including without limitation in connection with registering for
              events or mailing lists, submission of job applications, responses
              to survey questions, providing comments, suggestions, and other
              information that you voluntarily submit. If you choose to provide
              such information, you are giving AnitaB.org the permission to use
              and store it consistent with this policy. Therefore, please
              understand that when you sign in with AnitaB.org, you are not
              anonymous to us. We may also obtain information, including
              personal information, from third parties and other sources. If we
              combine or associate information from other sources with personal
              information that we collect, we will treat the combined
              information as personal information in accordance with this
              Privacy Policy.
            </p>
            <h4>How Is Such Information Used?</h4>
            <p>
              We may use personal information we collect in order to establish
              and enhance our relationship with you. AnitaB.org may use personal
              information to share with you information that we feel may be of
              interest to you, such as invitations to attend AnitaB.org events
              or the events of other carefully chosen organizations, to review
              and enhance our products and service offerings, to contact you
              about your membership, to provide local networking and educational
              opportunities, or otherwise to further our charitable purpose and
              to comply with applicable law. If you make charitable donations to
              AnitaB.org or otherwise engage in off-line activities with
              AnitaB.org, this Donor Information may be merged in our database
              with your online personal information. The information AnitaB.org
              collects and how the information is used will specifically depend
              on which of AnitaB.org’s products or services you use. AnitaB.org
              will only require you to provide us with information if it is
              needed for the legitimate interest of providing you with a product
              or service or the execution of a transaction. Any time you
              voluntarily submit information in additional to that described
              above, you are providing the information on a voluntary basis
              whereby you consent to our use of the information as described at
              the time requested. You can contact us at any time to adjust your
              privacy preferences or ask questions about how the information
              might be used. Your personal information is only retained by
              AnitaB.org for as long as needed to facilitate the product or
              service, facilitate communication, or otherwise execute the
              purpose for which the information was obtained in the first place.
              This means that although much of the information can be deleted
              automatically (e.g. when you elect to unsubscribe from a
              newsletter), some will require manual review before doing so (e.g.
              you have purchased a ticket for an event and we need some way to
              verify who you are in order to be admitted to the event). Tasks
              related to event organization and other functions of AnitaB.org
              are performed both by employees, agents and contractors of
              AnitaB.org and by volunteers (“AnitaB.org Volunteers”) who are not
              employees. By making use of the Site(s), you consent to allow
              AnitaB.org employees, agents, contractors, and AnitaB.org
              Volunteers to access any personal information you submit to the
              Site(s) to provide AnitaB.org with a specific service and not for
              any other purpose. Additionally, AnitaB.org generally uses the
              information to operate, maintain, enhance, and provide all of the
              features and services found on the Site(s). Under certain
              circumstances (for example if you win a contest) we may post your
              personal information on the Site(s). However, we will notify you
              of this possibility when collecting personal information or we
              will obtain your consent to post this information. We may share
              your personal information with certain other websites that we link
              to (and that you click upon) in order to achieve the purpose of
              the connection with the Site(s). AnitaB.org may also use the
              information that we collect to understand and analyze the usage
              trends and preferences of our users, to improve the way the
              Site(s) work and look, and to create new features and
              functionality. The information may be stored and maintained for as
              long as reasonably necessary to effectuate the service requested
              and for a reasonable time thereafter.
            </p>
            <h4>When AnitaB.org Discloses Information</h4>
            <p>
              AnitaB.org discloses information to third parties as follows: (i)
              to agents, subcontractors and other third parties, including
              AnitaB.org volunteers, who are engaged by AnitaB.org in making the
              AnitaB.org products and services available and otherwise assisting
              AnitaB.org in its charitable purpose, including fundraising; and
              (ii) to selected affiliates, marketing partners and other
              organizations that AnitaB.org may affiliate with in furtherance of
              its charitable purpose. In addition, if you register to attend an
              event or conference sponsored by AnitaB.org, AnitaB.org may also
              disclose a list of attendee contact information to other attendees
              at such conference or event; provided, that AnitaB.org will
              provide attendees with the opportunity to opt-out of such
              disclosure. As described above, to the extent any Donor
              Information is processed through a third-party service provider,
              Donor Information will only be used for purposes necessary to
              process that activity. AnitaB.org may disclose information if
              required to do so by law or in the good faith belief that such
              action is necessary to: (1) comply with state or federal laws
              (such as U.S. Copyright law), or respond to a court order,
              judicial or other government subpoena or warrant, or otherwise
              comply with legal process served on AnitaB.org or the Site(s); (2)
              protect and defend the rights or property of AnitaB.org or
              otherwise take precautions against liability; or (3) act in urgent
              circumstances to protect the rights, property, or personal safety
              of AnitaB.org and users of AnitaB.org, its websites or the public;
              (4) protect AnitaB.org from fraudulent, abusive, or unlawful
              uses;(5) investigate and defend ourselves against third party
              claims or allegations; (6) assist government enforcement agencies;
              or (7) protect the security or integrity of the Site(s).
            </p>
            <h4>Systers Site</h4>
            <p>
              AnitaB.org collects the following personal information from you
              when you register to use the Systers List: e-mail address, full
              name, gender, and a short essay discussing involvement in
              technical computing. We also collect and archive submissions to
              the Systers List and thus we retain any personal information you
              choose to include in those submissions. This site is a
              conversation-style site where members post questions and answers
              to each other and engage in other forms of communication based on
              the interests of the collective group. The information AnitaB.org
              collects from the members of the site is only for the purpose of
              ensuring the security and privacy Personal information collected
              on the Systers Site may be used for the purposes of enabling
              registration, maintenance, support and participation in the
              Systers List. In addition, archives of emails sent to the Systers
              List are maintained on the Systers Site and are accessible to list
              members. When they register to participate, Systers List members
              agree to be bound by the Systers List FAQs, which requires that
              information posted to the Systers List not be shared with
              non-members unless the explicit permission of the poster is sought
              and received, but AnitaB.org is not responsible for any undesired
              dissemination of information by members of the Systers List. You
              can unsubscribe from the Systers List at any time by entering your
              email address at the bottom of the Systers.org site and clicking
              “Unsubscribe or edit options.”
            </p>
            <h4>Non-identifiable Aggregated Data</h4>
            <p>
              Non-identifiable data is information that subsequently is used in
              aggregate form or in a manner that does not readily identify an
              individual. We may collect non-identifiable data whether or not
              you are a registered member of AnitaB.org. We may use
              non-identifiable data for purposes of research or analysis. We may
              conduct research on our customer demographics, internet usage, and
              interests and behavior based on personal data we gather. Although
              non-identifiable data may be based in part on personal
              information, it does not identify you personally. AnitaB.org may
              share this type of non-identifiable data with a variety of third
              parties, including its affiliates, advertisers and other current
              and prospective business partners. AnitaB.org may use
              non-identifiable data collected for website administration,
              advertising and promotional purposes, for understanding the usage,
              viewing, and demographic patterns for certain programs, content,
              services, advertisements, promotions, and/or functionality on the
              Site(s), and we may share such information with various affiliated
              and unaffiliated entities for such purposes. We may also enter
              into agreements with outside companies that possess technology
              that allows us to customize our advertising and marketing
              messages. Your non-personally identifiable information and click
              stream data about your activities may be shared with these
              companies so this customization can be accomplished. Our agreement
              with these companies prohibits them from sharing your information
              with any third party or using it for any other purpose.
              Non-identifiable click stream and demographic information may also
              be shared with our advertisers and business partners.
            </p>
            <h4>Choice</h4>
            <p>
              You may, of course, decline to share your personal information
              with AnitaB.org, in which case AnitaB.org will not be able to
              provide to you some of the features and functionality found on the
              Site(s). If you would like us to limit communications to you or
              use or disclosure of your personal information, please make your
              request by email to Privacy@AnitaB.org. We will respond within a
              reasonable period to notify you either that we will use reasonable
              efforts to accommodate your request or alternatively, that we are
              unable to do so and will delete your personal information from our
              databases. You may request a copy of any information we have about
              you, update your information, or request any information about to
              be deleted from our databases at any time by emailing{" "}
              <a href="mailto:Privacy@AnitaB.org">Privacy@AnitaB.org</a>.
            </p>
            <h4>Access</h4>
            <p>
              The accuracy of information provided by you is your
              responsibility. You agree you will not knowingly provide us
              inaccurate information. If someone has spoofed your e-mail address
              or you have another reason you would like to have such information
              edited or removed, please send an email to Privacy@AnitaB.org.
              with your request. Other personal information may be corrected,
              amended or deleted by requesting changes by email to{" "}
              <a href="mailto:Privacy@AnitaB.org">Privacy@AnitaB.org</a>.
            </p>
            <h4>Security Notice</h4>
            <p>
              While AnitaB.org uses certain measures intended to improve
              security, it is possible that information you provide us could be
              intercepted or otherwise accessed by unauthorized parties. In
              addition, any information sent to us by email may not be secure
              during transit, due to the nature of email. AnitaB.org does not
              provide any guarantees that information will not be accessed,
              disclosed, altered or destroyed by breach of any of our physical,
              technical, or managerial safeguards. If AnitaB.org learns of a
              security breach we will immediately notify you electronically so
              that you can take appropriate protective steps and inform you of
              what we are doing to help remedy the situation.
            </p>
            <h4>International Transfers</h4>
            <p>
              The Site(s) are hosted in the United States. If you choose to use
              the Site(s) from the European Union or other regions of the world
              with laws governing data collection and use that may differ from
              U.S. law, then please note that you are transferring your personal
              information outside of those regions to the United States and by
              providing your personal information on the Site(s) you consent to
              that transfer. AnitaB.org will comply with the terms of this
              Privacy Policy regardless of where the information originates.
            </p>
            <h4>In the Event of Merger or Sale</h4>
            <p>
              In the event that AnitaB.org is acquired by or merged with a
              third-party entity, we reserve the right, in any of these
              circumstances, to transfer or assign the information that we have
              collected from users as part of such merger, acquisition, sale, or
              other change of control.
            </p>
            <h4>Third-Party Advertisers, Links to Other Sites</h4>
            <p>
              The Site(s) may be linked to internet websites operated by other
              companies or third-party sponsors. Some of these websites may be
              co-branded with our name or logo, even though they are not
              operated or maintained by us. AnitaB.org may also permit other
              companies, called third-party ad servers or ad networks, to serve
              advertisements within the Site(s). These third-party ad servers or
              ad networks may use technology to send, directly to your browser,
              some of the advertisements and links that appear on the Site(s).
              These advertisers may automatically receive your IP address if
              this happens. AnitaB.org may work with third parties (e.g.,
              Twitter, LinkedIn, and Facebook) who use web beacons, pixel tags,
              JavaScript code, and other technologies to collect or receive
              information from our Site and elsewhere on the Internet and use
              that information to provide measurement and conversion services
              and target advertisements. You may be able to opt-out of the
              collection and use of information for ad targeting by visiting
              www.aboutads.info/choices or by enabling do-not-track settings in
              your browser if your browser provides those settings. You should
              consult the respective privacy policies of these third-party
              websites and third party ad servers or ad networks. AnitaB.org’s
              privacy policy does not apply to, and we cannot control the
              activities of, such other third party advertisers or websites.
              Please be aware that AnitaB.org does not warn you when you have
              chosen to link through to another website from the Site(s).
            </p>
            <h4>Children</h4>
            <p>
              Protecting the privacy of young children is especially important.
              For that reason, the Sites are not intended for or directed to
              persons under the age of 13 and AnitaB.org does not knowingly
              collect or maintain personal information on the Sites from persons
              under 13 years-of-age. Any person who provides their information
              to AnitaB.org through any part of Site(s) represents to AnitaB.org
              that they are 13 years of age or older. If AnitaB.org learns that
              personal information of persons less than 13 years-of-age has been
              collected on AnitaB.org without verifiable parental consent, then
              AnitaB.org will take the appropriate steps to delete this
              information. If you are a parent or guardian and discover that
              your child under the age of 13 has provided personal information
              to AnitaB.org, then you may alert AnitaB.org at Privacy@AnitaB.org
              and request that AnitaB.org delete that child’s personal
              information from its systems.
            </p>
            <h4>Cookies, Web Pixels, and Similar Technologies</h4>
            <p>
              To the extent website usage information is developed through use
              of session cookies, we will only use this information to
              facilitate your use of our Site(s). Cookies are data files that
              are written onto your computer by a website. Cookies remember
              information about your activities on a website. The data collected
              by the cookies is associated with your computer IP address for the
              duration of the cookie. AnitaB.org may use both session cookies
              and persistent cookies. Please review your web browser “Help” file
              to learn the proper way to modify your cookie settings. However,
              without cookies you may not have access to certain services on the
              Site. Third party advertisements displayed in connection with the
              Site may also contain cookies set by internet advertisers. We do
              not control these cookies and users of the Site should check the
              privacy policy of the advertisers to see whether and how it uses
              cookies. AnitaB.org may use cookies to: (a) remember your
              information so that you will not have to re-enter it during your
              visit or the next time you visit the Site; (b) provide customized
              third-party advertisements, content, and information; (c) monitor
              the effectiveness of third-party marketing campaigns; (d) monitor
              aggregate site usage metrics such as total number of visitors and
              pages viewed; and (e) track your entries, submissions, and status
              in any promotions or other activities. We may also automatically
              record certain information from your device by using various types
              of technology, including web beacons, pixel tags, JavaScript code,
              and other technologies. This automatically collected information
              may include your IP address or other device address or ID, web
              browser and/or device type, the web pages or sites that you visit
              just before or just after you use the Site(s), the pages or other
              content you view or otherwise interact with on the Site(s), and
              the dates and times that you visit, access, or use the Site(s). We
              also may use these technologies to collect information regarding
              your interaction with email messages, such as whether you opened,
              clicked on, or forwarded a message. This information is gathered
              from all users, and may be connected with other information about
              you.
            </p>
            <h4>Contacting AnitaB.org</h4>
            <p>
              If you would like to contact AnitaB.org regarding this Privacy
              Policy, please contact us by email at{" "}
              <a href="mailto:Privacy@AnitaB.org">Privacy@AnitaB.org</a> or by
              postal mail at Privacy Director, Anita Borg Institute for Women
              and Technology, 1301 Shoreway Road, Suite 425, Belmont, CA 94002.
            </p>
            <p>Last Updated: June 21, 2018</p>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsAndPrivacyPolicyModal;
