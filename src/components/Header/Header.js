import { Button } from '../../UI/Button/Button';
import { Navbar } from '../Navbar/Navbar';
import style from "./Header.module.css"

const handleCurriculum = (e) => {
  e.currentTarget.blur()
  window.open("https://docs.google.com/document/d/1G0CTCd4VHPxxju3Bpqn4_D4DIOQcLRXVnSnJuSWS7ro/edit?usp=sharing")
}

export const Header = () => {
  return (
    <header className={style.header}>
      <div
        className={`${style.left} logo`}
      >
        LOGO
      </div>
      <Navbar />
      <div className={style.right}>
        <Button
          id="download"
          type="primary"
          onClick={(e)=>{handleCurriculum(e)}}
        >
          Ver curriculum
        </Button>
      </div>
    </header>
  )
}
