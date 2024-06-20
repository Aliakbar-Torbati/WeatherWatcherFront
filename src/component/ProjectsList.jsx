import projectaData from "../assets/projects.json";
import ProjectCard from "./ProjectCard";
import "./ProjectCardStyle.scss";

function ProjectsList() {
  return (
    <div className="project-container">
      {projectaData.map((project) => {
        return (
          <div key={project.title}>
            <ProjectCard {...project}/>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;
