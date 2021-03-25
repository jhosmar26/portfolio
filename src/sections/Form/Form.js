import React from 'react';
import style from "./Form.module.css";
import { useForm, ValidationError } from '@formspree/react';

export const Form = () => {
  const [state, handleSubmit] = useForm("xyylgnye");

  if (state.succeeded) {
    return <p className={style.thanksMessage}>Gracias por el correo! ;D</p>;
  }

  return (
    <form id="hablemos" className={style.form} onSubmit={handleSubmit}>
      <span className={`headline4 filter_subtitle ${style.title}`}>Hablemos</span>
      <p className={`body1 ${style.description}`}>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
      <label className="form-label" htmlFor="full-name">Nombre Completo</label>
      <input
        className={`body1 ${style.value}`}
        type="text"
        id="full-name"
        name="name"
        placeholder="Juan"
        required
      />
      <label className="form-label" htmlFor="mail">Correo electrónico</label>
      <input
        className={`body1 ${style.value}`}
        type="email"
        id="email"
        name="email"
        placeholder="Juan@gmail.com"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label className="form-label" htmlFor="message">Mensaje</label>
      <textarea
        className={`body1 ${style.value}`}
        type="text"
        id="message"
        name="message"
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      {/* <input type="submit" className={`${style.submit} button`} value="Enviar mensaje"></input> */}
      <button
        className={`${style.submit} button`}
        type="submit"
        disabled={state.submitting}
      >
        Enviar mensaje
      </button>
    </form>
  )
}
