import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchProjects } from "./fetchProjects";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // To navigate back
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <section className="projects">
        <h2>Project not found!</h2>
      </section>
    );
  }

  const { title, description, technologies, img, url, githubUrl } = project;

  return (
    <section className="project-detail">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>

      {/* Image */}
      <div className="project-img-container">
        <img src={img} alt={title} className="project-img" />
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Title */}
        <h1 className="project-title">{title}</h1>

        {/* Description */}
        <div className="project-description">
          {typeof description === "object"
            ? documentToReactComponents(description)
            : description}
        </div>

        {/* Technologies */}
        {technologies && (
          <div className="project-technologies">
            <h3>Technologies Used:</h3>
            <p>{technologies}</p>
          </div>
        )}

        {/* GitHub Link */}
        {githubUrl && (
          <div className="project-link">
            <h3>GitHub Repository:</h3>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              {githubUrl}
            </a>
          </div>
        )}

        {/* Live Project Link */}
        {url && (
          <div className="project-link">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project-button"
            >
              View Live Project
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
