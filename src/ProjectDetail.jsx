import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProjects } from "./fetchProjects";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectDetail = () => {
  const { id } = useParams();
  const { loading, projects } = useFetchProjects();

  // Loading state
  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">
          Loading project details...
        </h2>
      </section>
    );
  }

  // Check if project exists
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-red-500">
          Project not found!
        </h2>
      </section>
    );
  }

  const { title, description, technologies, img, url, githubUrl } = project;

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover sm:h-80"
        />

        {/* Content */}
        <div className="p-6 sm:p-10">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>

          {/* Description */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            {typeof description === "object"
              ? documentToReactComponents(description)
              : description}
          </div>

          {/* Technologies */}
          {technologies && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Technologies Used:
              </h3>
              <p className="text-gray-700">{technologies}</p>
            </div>
          )}

          {/* GitHub Link */}
          {githubUrl && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                GitHub Repository:
              </h3>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                {githubUrl}
              </a>
            </div>
          )}

          {/* Live Project Link */}
          {url && (
            <div className="mt-10">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                View Live Project
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
