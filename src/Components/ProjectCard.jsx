import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, icon, srcImg, githubLink, liveLink }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        color: "#000",
        padding: "20px",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #f0f0f0" }}
      icon={
        <img
          src={icon}
          alt="icon"
          className="bg-white p-2 rounded-full w-full h-full"
        />
      }
      style={{ borderLeft: "none", borderBottom: "none" }}
    >
      {/* Card wrapper */}
      <div className="group relative mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Project Image */}
        <img
          src={srcImg}
          alt={title}
          className="shadow-md rounded-lg w-full h-auto group-hover:scale-110 transition-transform duration-300 transform"
        />

        {/* Overlay icons - show on hover for desktop */}
        <div className="absolute inset-0 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 backdrop-blur-sm rounded-lg transition-opacity duration-300 sm:pointer-events-auto">
          <a
            href={githubLink}
            target="_blank" 
            className="bg-black hover:bg-gray-300 p-3 rounded-full text-white hover:text-black transition cursor-pointer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={liveLink}
            target="_blank" 
            className="bg-black hover:bg-gray-300 p-3 rounded-full text-white hover:text-black transition cursor-pointer"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>

      </div>

      {/* Title */}
      <h3 className="mt-3 font-serif font-bold text-white text-xl sm:text-2xl text-center">
        {title}
      </h3>

      {/* Icons below card for touch devices (hidden on sm and up) */}
      <div className="sm:hidden flex justify-center gap-6 mt-3">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 p-3 rounded-full text-black transition"
        >
          <FaGithub size={22} />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-200 p-3 rounded-full text-black transition"
        >
          <FaExternalLinkAlt size={20} />
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

export default ProjectCard;
