import React from 'react'
import style from "./Navbar.module.css"

const handleClick = (e)=>{
  e.currentTarget.blur()
  console.log("a")
}

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <a href="#a" className={`${style.link} button ${style.active}`} onClick={handleClick}>Hola</a>
      <a href="#b" className={`${style.link} button`} onClick={handleClick}>Proyectos</a>
      <a href="#c" className={`${style.link} button`} onClick={handleClick}>Hablemos</a>
    </nav>
  )
}
