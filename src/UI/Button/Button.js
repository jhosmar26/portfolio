import style from "./Button.module.css"
export const Button = ({children, type, onClick, id}) => {
  return (
    <button
      type="button"
      id={id}
      className={`${style[type]} ${style.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
