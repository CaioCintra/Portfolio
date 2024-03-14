import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <p className="text-3xl font-bold text-center m-11">Contato</p>
      <div className="flex items-center flex-wrap justify-center mb-20">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=caiocintra2000@gmail.com">
          <div className="flex flex-col items-center justify-center w-48 m-3">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 duration-300 hover:bg-violet-900 flex items-center  justify-center">
              <FontAwesomeIcon className="h-16 w-16" icon={faEnvelope} />
            </div>
            <p className="text-center font-extrabold">E-mail</p>
            <p className="text-center text-gray-500">
              caiocintra2000@gmail.com
            </p>
          </div>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519971237434">
          <div className="flex flex-col items-center justify-center w-48 m-3">
            <div className="rounded-full bg-violet-600 h-24 w-24 m-2 duration-300 hover:bg-violet-900 flex items-center  justify-center">
              <FontAwesomeIcon className="h-14 w-14" icon={faPhone} />
            </div>
            <p className="text-center font-extrabold">Telefone</p>
            <p className="text-center text-gray-500">(19) 971237434</p>
          </div>
        </a>
        <a href="https://github.com/CaioCintra">
        <div className="flex flex-col items-center justify-center w-48 m-3">
          <div className="rounded-full bg-violet-600 h-24 w-24 m-2 duration-300 hover:bg-violet-900 flex items-center  justify-center">
            <FontAwesomeIcon className="h-16 w-16" icon={faGithub} />
          </div>
          <p className="text-center font-extrabold">Github</p>
          <p className="text-center text-gray-500">@CaioCintra</p>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/caio-j-cintra/">
        <div className="flex flex-col items-center justify-center w-48 m-3">
          <div className="rounded-full bg-violet-600 h-24 w-24 m-2 duration-300 hover:bg-violet-900 flex items-center  justify-center">
            <FontAwesomeIcon className="h-16 w-16" icon={faLinkedin} />
          </div>
          <p className="text-center font-extrabold">Linkedin</p>
          <p className="text-center text-gray-500">@caio-j-cintra</p>
        </div>
        </a>
      </div>
    </>
  );
}
