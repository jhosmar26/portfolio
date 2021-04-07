import React from 'react'
import style from "./Comment.module.css"
import arrow from "./../../stylesheet/arrow-down.png"

export const Comment = () => {
  return (
    <section className={style.Comment}>
      <p className={`comment-text ${style.commentText}`}>Mi carrera no es larga pero tengo proyectos de los que estoy orgulloso de compartir</p>
      <p className="headline5">...y algunas referencias de compañeros :D.</p>
      <img className={style.arrow} src={arrow} alt="arrow_icon" />
    </section>
  )
}
