import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({
  name,
  description,
  link,
  icons,
  github,
  noGithub,
}) {
  return (
    <div>
      <a href={link} className="hover:underline">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>{description}</p>
          <div className="icons text-2xl">
            {icons.map((item) => (
              <FontAwesomeIcon icon={item} key={item} />
            ))}
          </div>
        </div>
      </a>
      {noGithub ? (
        ""
      ) : (
        <a href={github} className="text-2xl opacity-30 hover:opacity-100">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      )}
    </div>
  );
}
