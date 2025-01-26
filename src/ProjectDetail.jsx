import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProjects } from "./fetchProjects";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectDetail = () => {
  const { id } = useParams();
  const { loading, projects } = useFetchProjects();

  // Show a loading state while projects are being fetched
  if (loading) {
    return (
      <section className="py-10">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Loading project details...
        </h2>
      </section>
    );
  }

  // Find the project based on the ID from the URL
  const project = projects.find((proj) => proj.id === id);

  // If the project is not found, display an error message
  if (!project) {
    return (
      <section className="py-10">
        <h2 className="text-center text-2xl font-bold text-red-500">
          Project not found!
        </h2>
      </section>
    );
  }

  const { title, description, technologies, img, url, githubUrl } = project;

  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <img src={img} alt={title} className="w-full h-64 object-cover" />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

          {/* Render Rich Text Description */}
          <div className="text-gray-700 mt-4">
            {typeof description === "object"
              ? documentToReactComponents(description)
              : description}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">
            Technologies Used:
          </h3>
          <p className="text-gray-700 mt-2">
            {technologies || "No technologies listed."}
          </p>

          {/* GitHub Link with Description */}
          {githubUrl && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">
                GitHub Repository:
              </h3>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {githubUrl}
              </a>
            </div>
          )}

          {/* Live Project Link */}
          <div className="mt-6">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Live Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
