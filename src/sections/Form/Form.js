import React from 'react'
import style from "./Form.module.css"

export const Form = () => {
  return (
    <form className={style.form}>
      <span className={`headline4 filter_subtitle ${style.title}`}>Hablemos</span>
      <p className={`body1 ${style.description}`}>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
      <label className="form-label" htmlFor="name">Nombre Completo</label>
      <input className={`body1 ${style.value}`} type="text" id="name" placeholder="Juan"/>
      <label className="form-label" htmlFor="mail">Correo electrónico</label>
      <input className={`body1 ${style.value}`} type="text" id="mail" placeholder="Juan@gmail.com"/>
      <label className="form-label" htmlFor="message">Mensaje</label>
      <textarea className={`body1 ${style.value}`} type="text" id="message" />
      <input type="submit" className={`${style.submit} button`} value="Enviar mensaje"></input>
    </form>
  )
}
