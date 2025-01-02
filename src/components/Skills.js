import React from 'react';
import javaImage from '../assets/skills/java.png';
import springBootImage from '../assets/skills/springboot.png';
import dotnetImage from '../assets/skills/dotnet.png';
import jspImage from '../assets/skills/jsp.png';
import servletImage from '../assets/skills/servlet.png';
import reactImage from '../assets/skills/react.png';
import javascriptImage from '../assets/skills/javascript.png';
import mysqlImage from '../assets/skills/Mysql.png';
import restApiImage from '../assets/skills/RestApi.png';
import htmlCssBootstrapImage from '../assets/skills/html.png';
import BootstrapImage from '../assets/skills/Bootstrap.png';
import gitImage from '../assets/skills/Git.png';

// Map the images to corresponding skills
const staticSkills = [
  { title: 'Java', imageSrc: javaImage },
  { title: 'Spring Boot', imageSrc: springBootImage },
  { title: 'Dotnet', imageSrc: dotnetImage },
  { title: 'JSP', imageSrc: jspImage },
  { title: 'Servlet', imageSrc: servletImage },
  { title: 'React', imageSrc: reactImage },
  { title: 'JavaScript', imageSrc: javascriptImage },
  { title: 'MySQL/PLSQL', imageSrc: mysqlImage },
  { title: 'REST API', imageSrc: restApiImage },
  { title: 'HTML/CSS', imageSrc: htmlCssBootstrapImage },
  { title: 'Bootstrap', imageSrc: BootstrapImage },
  { title: 'Git', imageSrc: gitImage },
];

const Skills = () => (
  <div className="container skills" id="skills">
    <h1>SKILLS</h1>
    <div className="items">
      {staticSkills.map((data, index) => (
        <div
          className="item"
          key={index}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <img src={data.imageSrc} alt={data.title} />
          <h3>{data.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
