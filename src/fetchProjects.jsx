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
          githubUrl = "#", // Added GitHub URL with default fallback
        } = item.fields;

        const id = item.sys.id;

        // Add `https:` to the image URL
        const img = image?.fields?.file?.url
          ? `https:${image.fields.file.url}` // Ensure the URL is complete
          : "https://via.placeholder.com/800x400?text=No+Image"; // Placeholder for missing images

        return { id, title, url, img, description, technologies, githubUrl };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
