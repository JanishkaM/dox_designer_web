import Cta from "@/components/Cta";
import { Checkbox } from "@/components/ui/checkbox";
import { Helmet, HelmetProvider  } from 'react-helmet-async';

export default function CvIncPost() {
  return (
    <HelmetProvider>
    <main>
      <Helmet>
        <title>Detailed Guide On What To Include In Your CV To Make It Perfect.</title>
        <meta
          name="description"
          content="You can make sure your resume has all the information it needs. You can check the details you already have and what you don't have on our website."
        />

        {/* Open Graph tags */}
        <meta property="og:title" content="Detailed Guide On What To Include In Your CV To Make It Perfect." />
        <meta
          property="og:description"
          content="You can make sure your resume has all the information it needs. You can check the details you already have and what you don't have on our website."
        />
        <meta property="og:image" content="/images/cvincpostsocial.png" />
        <meta property="og:url" content="https://doxdesigner.netlify.app/posts/cv-include" />
      </Helmet>
      <section className="pb-20">
        <div className="container">
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="order-2">
              <h1 className="text-3xl font-extrabold pb-2">
                Crafting the Perfect CV: A Comprehensive Guide
              </h1>
              <p className="pe-5">
                In today’s competitive job market, a{" "}
                <span className="font-medium bg-primary px-1 rounded capitalize">
                  well-structured CV is your passport to standing out from the
                  crowd.
                </span>{" "}
                It’s your first impression, your chance to tell your
                professional story, and ultimately, your ticket to landing that
                dream job.{" "}
                <span className="font-medium bg-primary px-1 rounded capitalize">
                  Here’s a detailed guide on what to include in your CV to make
                  it perfect.
                </span>
              </p>
            </div>
            <div className="md:py-0 py-8 order-1">
              <img src="/images/cvincpost.png" alt="" />
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-bold">1. Contact Information</h2>
            <p className="pb-3">
              Start with your contact details at the top of your CV. Ensure this
              section is clear and easily accessible.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-1">
                  <Checkbox className="me-2" id="select-1" />
                  <strong className="text-green-700">Full Name:</strong> Your
                  official name as you use in professional correspondence.
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-2">
                  <Checkbox className="me-2" id="select-2" />
                  <strong className="text-green-700">Phone Number:</strong>{" "}
                  Preferably your mobile number.
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-3">
                  <Checkbox className="me-2" id="select-3" />
                  <strong className="text-green-700">Email Address:</strong> Use
                  a professional email address (e.g.,
                  firstname.lastname@gmail.com).
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-4">
                  <Checkbox className="me-2" id="select-4" />
                  <strong className="text-green-700">
                    LinkedIn Profile:
                  </strong>{" "}
                  If you have a well-maintained LinkedIn profile, include it.
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-5">
                  <Checkbox className="me-2" id="select-5" />
                  <strong className="text-green-700">Address:</strong>{" "}
                  Optionally, you can include your city and country.
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">
              2. Professional Summary or Objective
            </h2>
            <p className="pb-3">
              This section provides a snapshot of your professional background
              and career aspirations. Tailor it to the job you’re applying for.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-6">
                  <Checkbox className="me-2" id="select-6" />
                  <strong className="text-green-700">
                    Professional Summary:
                  </strong>{" "}
                  A brief 2-4 sentence summary of your career, highlighting key
                  achievements and skills.
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-7">
                  <Checkbox className="me-2" id="select-7" />
                  <strong className="text-green-700">
                    Objective (optional):
                  </strong>{" "}
                  For those early in their career or changing fields, a short
                  statement about your career goals.
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">3. Key Skills</h2>
            <p className="pb-3">
              Highlight your core competencies relevant to the job. Use bullet
              points for clarity and include a mix of hard and soft skills.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-8">
                  <Checkbox className="me-2" id="select-8" />
                  Technical skills (e.g., programming languages, software
                  proficiency)
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-9">
                  <Checkbox className="me-2" id="select-9" />
                  Soft skills (e.g., communication, teamwork, problem-solving)
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-10">
                  <Checkbox className="me-2" id="select-10" />
                  Industry-specific skills
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">4. Professional Experience</h2>
            <p className="pb-3">
              Detail your work history in reverse chronological order, starting
              with your most recent position. Focus on accomplishments and
              responsibilities.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-11">
                  <Checkbox className="me-2" id="select-11" />
                  <strong className="text-green-700">Job Title</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-12">
                  <Checkbox className="me-2" id="select-12" />
                  <strong className="text-green-700">Company Name</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-13">
                  <Checkbox className="me-2" id="select-13" />
                  <strong className="text-green-700">
                    Location (City, Country)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-14">
                  <Checkbox className="me-2" id="select-14" />
                  <strong className="text-green-700">
                    Dates of Employment (Month/Year to Month/Year)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-15">
                  <Checkbox className="me-2" id="select-15" />
                  <strong className="text-green-700">
                    Responsibilities and Achievements:
                  </strong>{" "}
                  Use bullet points to outline key duties and accomplishments.
                  Quantify achievements with metrics where possible (e.g.,
                  “Increased sales by 20%”).
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">5. Education</h2>
            <p className="pb-3">
              List your educational background, starting with the most recent
              degree. Include relevant coursework, honors, and distinctions.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-16">
                  <Checkbox className="me-2" id="select-16" />
                  <strong className="text-green-700">Degree(s) Earned</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-17">
                  <Checkbox className="me-2" id="select-17" />
                  <strong className="text-green-700">Institution Name</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-18">
                  <Checkbox className="me-2" id="select-18" />
                  <strong className="text-green-700">
                    Location (City, Country)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-19">
                  <Checkbox className="me-2" id="select-19" />
                  <strong className="text-green-700">
                    Graduation Date (Month/Year)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-20">
                  <Checkbox className="me-2" id="select-20" />
                  <strong className="text-green-700">
                    Relevant Coursework or Honors (optional)
                  </strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">
              6. Certifications and Professional Development
            </h2>
            <p className="pb-3">
              Showcase additional qualifications that enhance your candidacy.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-21">
                  <Checkbox className="me-2" id="select-21" />
                  <strong className="text-green-700">Certification Name</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-22">
                  <Checkbox className="me-2" id="select-22" />
                  <strong className="text-green-700">
                    Issuing Organization
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-23">
                  <Checkbox className="me-2" id="select-23" />
                  <strong className="text-green-700">
                    Date Obtained (Month/Year)
                  </strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">7. Projects (optional)</h2>
            <p className="pb-3">
              For fields like IT, engineering, and creative industries,
              detailing specific projects can be valuable.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-24">
                  <Checkbox className="me-2" id="select-24" />
                  <strong className="text-green-700">Project Title</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-25">
                  <Checkbox className="me-2" id="select-25" />
                  <strong className="text-green-700">
                    Brief Description:
                  </strong>{" "}
                  Outline the project goals, your role, and the outcome.
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-26">
                  <Checkbox className="me-2" id="select-26" />
                  <strong className="text-green-700">
                    Technologies Used (if applicable)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-27">
                  <Checkbox className="me-2" id="select-27" />
                  <strong className="text-green-700">Project Date</strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">
              8. Publications and Research (optional)
            </h2>
            <p className="pb-3">
              If you have academic publications or have conducted significant
              research, include them in this section.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-28">
                  <Checkbox className="me-2" id="select-28" />
                  <strong className="text-green-700">
                    Title of Publication/Research
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-29">
                  <Checkbox className="me-2" id="select-29" />
                  <strong className="text-green-700">
                    Co-authors (if any)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-30">
                  <Checkbox className="me-2" id="select-30" />
                  <strong className="text-green-700">
                    Publication Outlet (Journal, Conference, etc.)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-31">
                  <Checkbox className="me-2" id="select-31" />
                  <strong className="text-green-700">
                    Date of Publication
                  </strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">9. Awards and Honors</h2>
            <p className="pb-3">
              List any awards or recognitions that highlight your achievements.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-32">
                  <Checkbox className="me-2" id="select-32" />
                  <strong className="text-green-700">Award Name</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-33">
                  <Checkbox className="me-2" id="select-33" />
                  <strong className="text-green-700">
                    Issuing Organization
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-34">
                  <Checkbox className="me-2" id="select-34" />
                  <strong className="text-green-700">Date Received</strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">
              10. Professional Affiliations and Memberships
            </h2>
            <p className="pb-3">
              Show your involvement in professional communities.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-35">
                  <Checkbox className="me-2" id="select-35" />
                  <strong className="text-green-700">Organization Name</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-36">
                  <Checkbox className="me-2" id="select-36" />
                  <strong className="text-green-700">
                    Membership Type (Member, Board Member, etc.)
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-37">
                  <Checkbox className="me-2" id="select-37" />
                  <strong className="text-green-700">
                    Dates of Membership
                  </strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">
              11. Volunteer Experience (optional)
            </h2>
            <p className="pb-3">
              Demonstrate your commitment and social responsibility by including
              relevant volunteer work.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-38">
                  <Checkbox className="me-2" id="select-38" />
                  <strong className="text-green-700">Organization Name</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-39">
                  <Checkbox className="me-2" id="select-39" />
                  <strong className="text-green-700">Role</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-40">
                  <Checkbox className="me-2" id="select-40" />
                  <strong className="text-green-700">
                    Dates of Involvement
                  </strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-41">
                  <Checkbox className="me-2" id="select-41" />
                  <strong className="text-green-700">
                    Key Responsibilities and Achievements
                  </strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">12. Languages</h2>
            <p className="pb-3">
              If you are multilingual, include the languages you speak and your
              proficiency levels.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-42">
                  <Checkbox className="me-2" id="select-42" />
                  <strong className="text-green-700">Language</strong>
                </label>
              </li>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-43">
                  <Checkbox className="me-2" id="select-43" />
                  <strong className="text-green-700">
                    Proficiency Level (Basic, Conversational, Fluent, Native)
                  </strong>
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">
              13. Hobbies and Interests (optional)
            </h2>
            <p className="pb-3">
              Personalize your CV by adding hobbies and interests that reflect
              your personality and might be relevant to the job.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-44">
                  <Checkbox className="me-2" id="select-44" />
                  <strong className="text-green-700">
                    Hobbies or Interests:
                  </strong>{" "}
                  Mention those that demonstrate skills or qualities relevant to
                  the job.
                </label>
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold">14. References</h2>
            <p className="pb-3">
              Typically, references are provided upon request, but you can
              mention that they are available.
            </p>
            <ul>
              <li className="text-gray-600 mb-2">
                <label htmlFor="select-45">
                  <Checkbox className="me-2" id="select-45" />
                  <strong className="text-green-700">Statement:</strong>{" "}
                  “References available upon request.”
                </label>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold pb-4">
            Tips for Crafting a Perfect CV
          </h2>
          <ul>
            <li className="text-gray-600 mb-2">
              <strong className="text-green-700">Tailor Your CV:</strong>{" "}
              Customize your CV for each job application to match the job
              description.
            </li>
            <li className="text-gray-600 mb-2">
              <strong className="text-green-700">Keep It Concise:</strong> Aim
              for a 1-2 page CV. Be concise and avoid unnecessary details.
            </li>
            <li className="text-gray-600 mb-2">
              <strong className="text-green-700">Use Action Verbs:</strong>{" "}
              Start bullet points with action verbs (e.g., led, managed,
              developed).
            </li>
            <li className="text-gray-600 mb-2">
              <strong className="text-green-700">Proofread:</strong> Ensure your
              CV is free of typos and grammatical errors.
            </li>
            <li className="text-gray-600 mb-2">
              <strong className="text-green-700">Formatting:</strong> Use a
              clean, professional layout with consistent formatting. Stick to
              standard fonts like Arial or Times New Roman.
            </li>
          </ul>

          <p className="pt-6">
            By following this comprehensive guide, you’ll be well on your way to
            creating a CV that effectively showcases your qualifications, stands
            out to employers, and helps you secure your next great job
            opportunity.
          </p>
        </div>
      </section>
      <Cta />
    </main>
    </HelmetProvider>
  );
}
