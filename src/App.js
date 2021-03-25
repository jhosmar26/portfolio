import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header";
import { Comment } from "./sections/Comment/Comment";
import { Hero } from "./sections/Hero/Hero";
import { Quote } from "./sections/Quote/Quote";
import { Reference } from "./sections/Reference/Reference";
import referenceImg1 from "./stylesheet/leonidasPage.png"
import author1 from "./stylesheet/user1.png"
import referenceImg2 from "./stylesheet/ipad.png"
import author2 from "./stylesheet/user2.png"
import referenceImg3 from "./stylesheet/iphone.png"
import author3 from "./stylesheet/user3.png"
import { Social } from "./UI/Social/Social";
import { FaHeart } from "react-icons/fa"
import style from "./App.module.css"
import { Form } from "./sections/Form/Form";

function App() {
  const [top, setStop] = useState(window.scrollY);

  useEffect(()=>{
    window.onscroll = ()=>{setStop(window.scrollY)}
  },[]);

  return (
    <div className="App">

      <Header top={top === 0 ? true : false}/>
      {top === 0 ? true : false}
      <Hero />
      <Comment/>
      <Reference
        id="proyectos"
        title="leonidasesteban.com"
        description="Accede a más de 120 proyectos que te ayudarán a mejorar
        tus habilidades como desarrollador Front-End."
        proyectUrl="https://leonidasesteban.com/"
        heroImg={referenceImg1}
        referenced
      />
      <Quote
        img={author1}
        quote= "Elisa ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses"
        author= "LEONIDAS ESTEBAN / COFUNDADOR Y CEO LEONIDASESTEBAN.COM"
      />
      <Reference
        title="MARVOL"
        description="Es el sitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol."
        proyectUrl="https://leonidasesteban.com/"
        heroImg={referenceImg2}
        reverse={true}
      />
      <Quote
        img={author2}
        quote= "Elisa ha superado mis expectativas desde el diseño hasta el desarrollo"
        author= "JASON LOPEZ / COFUNDADOR Y CEO MARVOL"
      />
      <Reference
        title="NETNET"
        description={`Es el \nsitio oficial de Marvol Entertainment. Explore películas, personajes, cómics, programas de televisión, videos y más oficiales de Marvol.`}
        proyectUrl="https://leonidasesteban.com/"
        heroImg={referenceImg3}
      />
      <Quote
        img={author3}
        quote= "Por primera vez en la historia de nuestra empresa, aparecimos en todas las plataformas en las que trabajamos"
        author= "MARCO CORTEZ / NETNET"
      />
      <Form/>
      <footer className={style.footer}>
        <div
          className="logo"
        >
          LOGO
        </div>
        <p className="body1">
          Hecho con <FaHeart style={{marginBottom:-2}}/> de Elisa. Copyright 2021 - Todos los derechos reservados.
        </p>
        <Social/>
      </footer>
    </div>
  );
}

export default App;
