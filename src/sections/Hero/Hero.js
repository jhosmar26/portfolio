import { Social } from "../../UI/Social/Social"
import style from "./Hero.module.css"
import elisa from "./../../stylesheet/person.png"

export const Hero = () => {
  return (
    <section id="hola" className={style.hero}>
      <div className={style.left}>
        <p className={`${style.textHero} headline3`}>¡Hola a todos!</p>
        <p className={`${style.textHero} headline2`}>Soy Elisa</p>
        <p className="body1">Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
        <Social/>
      </div>
      <div className={style.right}>
        <img src={elisa} alt="elisa" className={style.elisa}/>
      </div>
    </section>
  )
}
