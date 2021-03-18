import React from 'react'
import style from "./Quote.module.css"

export const Quote = ({img, quote, author}) => {
  return (
    <section className={style.section}>
      <img className={style.photo} src={img} alt="author"/>
      <p className={`${style.quote} headline4`}>"{quote} ".</p>
      <p className={`${style.author} headline5`}>"{author}"</p>
    </section>
  )
}
