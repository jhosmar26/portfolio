import React from 'react'
import { Button } from '../../UI/Button/Button'
import style from "./Reference.module.css"
import { AiFillGithub } from "react-icons/ai"

const gotoUrl = (e, url) => {
  e.currentTarget.blur()
  window.open(url)
}

export const Reference = ({title, description, proyectUrl, heroImg, reverse = false}) => {

  return (
    <section className={`${style.Reference} ${reverse ? style.reverse : ""}`} id="c">
      <div className={style.left}>
        <div className="filter_subtitle headline4">{title}</div>
        <p className="body1" dangerouslySetInnerHTML={{ __html: description }} />
        <div className={style.buttons}>
          <Button
            id="download"
            type="primary"
            onClick={(e)=>{gotoUrl(e, proyectUrl)}}
          >
            Ver Proyecto
          </Button>
          <Button
            id="download"
            type="secundary"
            onClick={(e)=>{gotoUrl(e)}}
          >
            <AiFillGithub size="23"/>
            Ver Código
          </Button>
        </div>
      </div>
      <div className={style.right}>
        <img className={style.heroImg} src={heroImg} alt="desktop and responsive design"/>
      </div>
    </section>
  )
}
