import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "zoetf6i8ls87",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const {
          title = "Untitled Project",
          url = "#",
          image,
          description = "No description available",
          technologies = [],
          githubUrl = "#", // Added GitHub URL field with a default fallback
        } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url || "default-image.jpg"; // Use a placeholder image if none is provided

        return { id, title, url, img, description, technologies, githubUrl }; // Added githubUrl to the returned object
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching projects:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
