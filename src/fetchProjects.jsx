import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { staticProjects } from './staticProjects';

const client = createClient({
  space: 'zoetf6i8ls87',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

// Tutorial/practice Contentful entries that should not appear in the showcase.
// Uses partial, case-insensitive matching. Clean these up in Contentful when convenient.
const EXCLUDED_TITLES = [
  'birthday buddy',
  'tours',
  'reviews',
  'questions',
  'slider',
  'cart',
  'lorem ipsum',
  'lorem-ipsum',
  'loremipsum',
  'grocery',
  'color generator',
  'color-generator',
  'sidebar',
  'tabs',
  'navbar',
  'strapi',
  'tailwind portfolio',
  'images',
];

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'projects' });

        const cmsProjects = response.items
          .filter((item) => {
            const title = (item.fields.title || '').toLowerCase().trim();
            return !EXCLUDED_TITLES.some((excluded) => title.includes(excluded));
          })
          .map((item) => {
            const {
              title = 'Untitled Project',
              url = '#',
              image,
              description = 'No description available',
              technologies = [],
              githubUrl = '#',
            } = item.fields;

            const id = item.sys.id;
            const img = image?.fields?.file?.url
              ? `https:${image.fields.file.url}`
              : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=420&fit=crop&q=80';

            return { id, title, url, img, description, technologies, githubUrl };
          });

        setProjects([...cmsProjects, ...staticProjects]);
      } catch (error) {
        console.error('Error fetching projects from Contentful:', error);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { loading, projects };
};
