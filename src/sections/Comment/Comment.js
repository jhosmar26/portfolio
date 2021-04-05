import React from 'react'
import style from "./Comment.module.css"
import arrow from "./../../stylesheet/arrow-down.png"

export const Comment = () => {
  return (
    <section className={style.Comment}>
      <p className={`comment-text ${style.commentText}`}>A lo largo de mi carrera como Desarrollador, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
      <p className="headline5">Aquí hay algunos que me gustaría compartir.</p>
      <img className={style.arrow} src={arrow} alt="arrow_icon" />
    </section>
  )
}
