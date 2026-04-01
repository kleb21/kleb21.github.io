export interface Project {
  title: string;
  description: string;
  url: string;
  repoUrl?: string;
  image?: string;
  technologies: string[];
  featured: boolean;
}
