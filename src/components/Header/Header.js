import { useEffect, useState } from "react"
import { Button } from '../../UI/Button/Button';
import { Navbar } from '../Navbar/Navbar';
import style from "./Header.module.css"

const handleCurriculum = (e) => {
  e.currentTarget.blur()
  window.open("https://docs.google.com/document/d/1G0CTCd4VHPxxju3Bpqn4_D4DIOQcLRXVnSnJuSWS7ro/edit?usp=sharing")
}

export const Header = () => {
  const [top, setStop] = useState(window.scrollY);
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.onscroll = ()=>{setStop(window.scrollY)}
  },[]);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    };

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth)
  }, [])


  return (
    <header className={top === 0 ? style.header : style.headerFixed}>
      <div
        className={`${style.left} logo`}
        >
        El Pepe
      </div>
      <Navbar />
      <div className={style.right}>
        <Button
          id="download"
          type="primary"
          onClick={(e)=>{handleCurriculum(e)}}
        >
          {width > 1024 ? "Ver currículum": "Currículum"}
        </Button>
      </div>
    </header>
  )
}
