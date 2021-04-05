import style from "./Social.module.css"
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className={style.social}>
      <a href="https://twitter.com/jhose14384505" target="_blank" rel="noreferrer" className={style.prueba}><FaLinkedin color="#0F0A0A" size="24"/></a>
      <a href="https://github.com/jhosmar26" target="_blank" rel="noreferrer" className={style.prueba}><FaGithub color="#0F0A0A" size="24"/></a>
      <a href="https://www.linkedin.com/in/jhose-portillo/" target="_blank" rel="noreferrer" className={style.prueba}><AiOutlineTwitter color="#0F0A0A" size="24"/></a>
    </div>
  )
}
