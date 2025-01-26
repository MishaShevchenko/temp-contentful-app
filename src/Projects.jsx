import { useFetchProjects } from "./fetchProjects";
import { Link } from "react-router-dom";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, title } = project;
          return (
            <Link key={id} to={`/project/${id}`} className="project">
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
