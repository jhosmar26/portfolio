import { Social } from "../../UI/Social/Social"
import style from "./Hero.module.css"
import incognito from "./../../stylesheet/incognito.svg"

export const Hero = () => {
  return (
    <section id="hola" className={style.hero}>
      <div className={style.left}>
        <p className={`${style.textHero} headline3`}>¡Hola a todos!</p>
        <p className={`${style.textHero} headline2`}>Soy Jhose</p>
        <p className="body1">Un Full-Stack Developer en busca de su primer empleo,<br/> te animas?</p>
        <Social/>
      </div>
      <div className={style.right}>
        <img src={incognito} alt="incognito" className={style.elisa}/>
      </div>
    </section>
  )
}
