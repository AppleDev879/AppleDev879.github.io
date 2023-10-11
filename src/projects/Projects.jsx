import { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "./ProjectItem";
export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const API_URL = "https://api.abarrett.io";
    axios
      .get(`${process.env.REACT_APP_API_URL || API_URL}/projects`)
      .then((res) => {
        const projects = res.data;
        setProjects(projects);
      });
  }, []);

  return (
    <section id="projects" className="projects section-container">
      <h1 className="section-title">Projects</h1>
      <div className="grid-container">
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </section>
  );
}
