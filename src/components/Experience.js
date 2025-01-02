import React from 'react';
import Bajaj from "../assets/company/bajaj.png";
import Gsoft from "../assets/company/g-soft.jpeg";
import machbiz from "../assets/company/machbiz.jpeg";
import fullstack from "../assets/company/image.png";


const staticSkills = [
  {
    id: 1,
    role: "Trainee Engineer",
    organisation: "Bajaj Auto Pvt. Ltd",
    startDate: "2019",
    endDate: "2020",
    location: "Valuj (Ch. Sambhajinagar)",
    experiences: [
      "Worked in the Maintenance Department, ensuring optimal functioning of equipment.",
      "Performed troubleshooting and preventive maintenance for industrial machinery."
    ],
    imageSrc:Bajaj
  },
  {
    id: 2,
    role: "Software Developer",
    organisation: "G-Soft Solutions Pvt. Ltd",
    startDate: "Jan 2024",
    endDate: "Nov 2024",
    location: "Pune, India",
    experiences: [
      "Developed web applications using Java, Spring Boot, JSP, Servlet, Dotnet, and React.",
      "Improved software performance by optimizing backend processes."
    ],
    imageSrc: Gsoft
  },
  {
    id: 3,
    role: "Junior Software Developer",
    organisation: "Machbizz Marketing Pvt. Ltd",
    startDate: "July 2024",
    endDate: "Present",
    location: "Pune, India",
    experiences: [
      "Collaborating on building scalable software solutions.",
      "Integrating third-party APIs and maintaining high-quality code standards."
    ],
    imageSrc: machbiz
  },
  {
    id: 4,
    role: "Full-Stack Development Certification",
    organisation: "Giri's Tech Hub",
    startDate: "2023",
    endDate: "",
    location: "Pune, India",
    experiences: [
      "Completed a rigorous course in full-stack development.",
      "Acquired proficiency in Java, Spring Boot, React, MySQL, and modern front-end technologies."
    ],
    imageSrc: fullstack
  }
];

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
      </div>
      {
        staticSkills.map((data, index) => (
          <div key={data.id} className="ex-items text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
            <div className="left">
              <img src={data.imageSrc} alt={data.role} style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>{data.startDate} - {data.endDate || 'Present'}</span>{" "}
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              {data.experiences.map((exp, idx) => (
                <h5 key={idx} style={{ color: "yellow" }}>{exp}</h5>
              ))}
            </div>
          </div>
        ))
      }
    </>
  );
};

export default Experience;
