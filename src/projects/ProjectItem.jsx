import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectItem({ project }) {
  const itemClicked = (e) => window.open(project.link);
  return (
    <div onClick={itemClicked} className="project-grid-item">
      <h3>
        {project.title}
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          style={{ color: "white", marginLeft: "8px" }}
        />
      </h3>
      <p>{project.content}</p>
    </div>
  );
}
