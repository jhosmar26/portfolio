import React, { useState } from 'react'
import style from "./Navbar.module.css"

const sections = [
  "hola", "proyectos", "hablemos"
]

export const Navbar = () => {
  const [current, setCurrent] = useState("hola")

  const handleClick = (currentLink)=>{
    setCurrent(currentLink)
  }

  return (
    <nav className={style.nav}>
      {sections.map((section)=>(
        <a
          href={"#" + section}
          className={`${style.link} button ${current === section && style.active}`}
          onClick={() => handleClick(section)}
          key={section}
        >
          {section.toUpperCase()}
        </a>
      ))}

      {/* <a href="#hola" className={`${style.link} button ${current === "hola" && style.active}`} onClick={() => handleClick("hola")}>Hola</a>
      <a href="#proyectos" className={`${style.link} button  ${current === "proyectos" && style.active}`} onClick={() => handleClick("proyectos")}>Proyectos</a>
      <a href="#hablemos" className={`${style.link} button  ${current === "hablemos" && style.active}`} onClick={() => handleClick("hablemos")}>Hablemos</a> */}
    </nav>
  )
}
