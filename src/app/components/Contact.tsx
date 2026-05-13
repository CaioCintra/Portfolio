import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <p className="text-2xl sm:text-3xl font-bold text-center m-6 sm:m-11">Contato</p>
      <div className="flex items-center flex-wrap justify-center mb-20 px-4 gap-4 sm:gap-6">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=caiocintra2000@gmail.com" className="transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col items-center justify-center w-40 sm:w-48">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-20 w-20 sm:h-24 sm:w-24 duration-300 hover:from-violet-700 hover:to-violet-900 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-12 w-12 sm:h-16 sm:w-16" icon={faEnvelope} />
            </div>
            <p className="text-center font-extrabold mt-3 text-sm sm:text-base">E-mail</p>
            <p className="text-center text-gray-400 text-xs sm:text-sm mt-1">
              caiocintra2000@gmail.com
            </p>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519971237434" className="transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col items-center justify-center w-40 sm:w-48">
            <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-20 w-20 sm:h-24 sm:w-24 duration-300 hover:from-violet-700 hover:to-violet-900 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
              <FontAwesomeIcon className="h-10 w-10 sm:h-14 sm:w-14" icon={faPhone} />
            </div>
            <p className="text-center font-extrabold mt-3 text-sm sm:text-base">Telefone</p>
            <p className="text-center text-gray-400 text-xs sm:text-sm mt-1">(19) 971237434</p>
          </div>
        </a>
        <a href="https://github.com/CaioCintra" className="transition-transform duration-300 hover:scale-105">
        <div className="flex flex-col items-center justify-center w-40 sm:w-48">
          <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-20 w-20 sm:h-24 sm:w-24 duration-300 hover:from-violet-700 hover:to-violet-900 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
            <FontAwesomeIcon className="h-12 w-12 sm:h-16 sm:w-16" icon={faGithub} />
          </div>
          <p className="text-center font-extrabold mt-3 text-sm sm:text-base">Github</p>
          <p className="text-center text-gray-400 text-xs sm:text-sm mt-1">@CaioCintra</p>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/caio-j-cintra/" className="transition-transform duration-300 hover:scale-105">
        <div className="flex flex-col items-center justify-center w-40 sm:w-48">
          <div className="rounded-full bg-gradient-to-br from-violet-600 to-violet-700 h-20 w-20 sm:h-24 sm:w-24 duration-300 hover:from-violet-700 hover:to-violet-900 flex items-center justify-center shadow-lg hover:shadow-violet-600/50">
            <FontAwesomeIcon className="h-12 w-12 sm:h-16 sm:w-16" icon={faLinkedin} />
          </div>
          <p className="text-center font-extrabold mt-3 text-sm sm:text-base">Linkedin</p>
          <p className="text-center text-gray-400 text-xs sm:text-sm mt-1">@caio-j-cintra</p>
        </div>
        </a>
      </div>
    </>
  );
}
