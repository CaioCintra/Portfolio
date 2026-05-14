"use client";
import { cibNextJs } from "@coreui/icons";
import {
  faAngular,
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";

export default function Tech() {
  return (
    <>
      <p className="text-2xl sm:text-3xl font-bold text-center m-6 sm:m-11">Principais tecnologias</p>
      <div className="flex items-center justify-center mb-20 px-4">
        <div className="w-full max-w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4 place-items-center px-2">
          <Tooltip title="HTML5">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center p-2 sm:p-3 shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faHtml5} />
            </div>
          </Tooltip>
          <Tooltip title="CSS3">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center p-2 sm:p-3 shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faCss3Alt} />
            </div>
          </Tooltip>
          <Tooltip title="Next.js">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <img
                src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png"
                className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20"
              />
            </div>
          </Tooltip>
          <Tooltip title="React.js">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faReact} />
            </div>
          </Tooltip>
          <Tooltip title="Angular">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faAngular} />
            </div>
          </Tooltip>
          <Tooltip title="TailwindCSS">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <img
                src="https://www.loopple.com/img/tailwind-logo.png"
                className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20"
              />
            </div>
          </Tooltip>
          <Tooltip title="Bootstrap">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faBootstrap} />
            </div>
          </Tooltip>
          <Tooltip title="Node.js">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faNode} />
            </div>
          </Tooltip>
          <Tooltip title="Figma">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
            <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faFigma} />
            </div>
          </Tooltip>
          <Tooltip title="Git/Github">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 hover:from-violet-700 hover:to-violet-900 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
            <FontAwesomeIcon className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20" icon={faGithub} />
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
