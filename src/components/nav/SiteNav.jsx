import "./styles.css";
import { Link } from "react-scroll";
export default function SiteNav() {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
