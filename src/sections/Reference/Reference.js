import React, { useEffect, useState } from 'react'
import { Button } from '../../UI/Button/Button'
import style from "./Reference.module.css"
import { AiFillGithub } from "react-icons/ai"

const gotoUrl = (e, url) => {
  e.currentTarget.blur()
  window.open(url)
}

export const Reference = ({id, title, description, proyectUrl, heroImg, reverse = false, referenced}) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    };

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <section id={id} className={`${style.Reference} ${reverse ? style.reverse : ""}`}>
      {referenced ? <div className={style.space}/> : ""}
      <div className={style.left}>
        <div className={`filter_subtitle ${width > 1024 ? "headline4" : "headline5"}`}>{title}</div>
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
