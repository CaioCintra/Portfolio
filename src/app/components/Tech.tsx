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
      <p className="text-3xl font-bold text-center m-11">Principais tecnologias</p>
      <div className="flex items-center flex-wrap justify-center mb-20">
        <div className="w-4/5 overflow-y-auto align-middle flex items-center flex-wrap justify-center">
          <Tooltip title="HTML5">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center p-3">
              <FontAwesomeIcon className="h-20 w-20" icon={faHtml5} />
            </div>
          </Tooltip>
          <Tooltip title="CSS3">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center p-3">
              <FontAwesomeIcon className="h-20 w-20" icon={faCss3Alt} />
            </div>
          </Tooltip>
          <Tooltip title="Next.js">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
              <img
                src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png"
                className="h-20 w-20"
              />
            </div>
          </Tooltip>
          <Tooltip title="React.js">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
              <FontAwesomeIcon className="h-20 w-20" icon={faReact} />
            </div>
          </Tooltip>
          <Tooltip title="Angular">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
              <FontAwesomeIcon className="h-20 w-20" icon={faAngular} />
            </div>
          </Tooltip>
          <Tooltip title="TailwindCSS">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
              <img
                src="https://www.loopple.com/img/tailwind-logo.png"
                className="h-20 w-20"
              />
            </div>
          </Tooltip>
          <Tooltip title="Bootstrap">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
              <FontAwesomeIcon className="h-20 w-20" icon={faBootstrap} />
            </div>
          </Tooltip>
          <Tooltip title="Node.js">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
              <FontAwesomeIcon className="h-20 w-20" icon={faNode} />
            </div>
          </Tooltip>
          <Tooltip title="Figma">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
            <FontAwesomeIcon className="h-20 w-20" icon={faFigma} />
            </div>
          </Tooltip>
          <Tooltip title="Git/Github">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 hover:bg-violet-900 transition duration-300 flex items-center flex-wrap justify-center">
            <FontAwesomeIcon className="h-20 w-20" icon={faGithub} />
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
