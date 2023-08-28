import React from "react";
// import "./resume.css";

const Resume = ({ resume }) => {
  let id = 0;
  return (
    <>
      <div className="stuff">
        <h1>{resume.name}</h1>
        <hr />
        <br />
        <p className="head">Interests</p>

        {
          <ul>
            {resume.interests.map((interest) => {
              return <li key={id++}>{interest}</li>;
            })}
          </ul>
        }
        <br />
        <br />
        <p className="head">Skills</p>
        <ul>
          {resume.skills.map((skill) => {
            return <li key={id++}>{skill}</li>;
          })}
        </ul>
        <br />
        <br />
        <p className="head">Education</p>
        <ul>
          {resume.education.map((education) => {
            return <li key={id++}>{education}</li>;
          })}
        </ul>
        <br />
        <br />
        <p className="head">Experience</p>
        {/* { year: 2012, company: "abc", role: "something abc" }, */}
        <ul>
          {resume.experience.map((exp) => {
            return (
              <li key={id++}>
                <b>Year:</b> {exp.year}
                <b> Company Name:</b>
                {exp.company}
                <b> Role:</b>
                {exp.role}
              </li>
            );
          })}
        </ul>
        <br />
        <br />
        <p className="head">Extracurriculars</p>
        <ul>
          {resume.Extracurriculars.map((extra) => (
            <li key={id++}>{extra}</li>
          ))}
        </ul>
      </div>
      <div className="right" />
      <div id="footer">
        <h2 id="name">{resume.name}</h2>
      </div>
    </>
  );
};

export default Resume;
