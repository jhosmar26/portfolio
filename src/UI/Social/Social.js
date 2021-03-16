import style from "./Social.module.css"
import { HiPhone, HiMail } from "react-icons/hi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Social = () => {
  return (
    <div className={style.social}>
      <a href="https://twitter.com/jhose14384505" target="_blank" rel="noreferrer"><HiPhone color="#0F0A0A" size="24"/></a>
      <a href="https://twitter.com/jhose14384505" target="_blank" rel="noreferrer"><HiMail color="#0F0A0A" size="24"/></a>
      <a href="https://twitter.com/jhose14384505" target="_blank" rel="noreferrer"><AiFillInstagram color="#0F0A0A" size="24"/></a>
      <a href="https://twitter.com/jhose14384505" target="_blank" rel="noreferrer"><AiOutlineTwitter color="#0F0A0A" size="24"/></a>
    </div>
  )
}
