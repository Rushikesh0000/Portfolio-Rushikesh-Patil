import React from "react";
import project from "./data/project.json";
import "bootstrap/dist/css/bootstrap.css";

const Projects = () => {
  // Limit the displayed projects to four
  const displayedProjects = project.slice(0, 4);

  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center">
          {displayedProjects.map((data) => (
            <div
              key={data.id}
              className="col-sm-6 col-md-6 col-lg-4 my-4 d-flex justify-content-center"
            >
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem", border: "1px solid yellow" }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a
                    href={data.demo}
                    className="btn btn-primary mx-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={data.source}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
