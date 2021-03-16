import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero id="a"/>
      <Hero id="b"/>
      <Hero id="c"/>
    </div>
  );
}

export default App;
