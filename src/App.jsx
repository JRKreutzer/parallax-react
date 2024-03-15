import "./app.scss"
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Serviços">
        <Parallax type="services"/>
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfólio">
        <Parallax type="portfolio"/>
      </section>
      <Portfolio />
      <section id="Contato">
        <Contact />
      </section>
    </div>
  )
}

export default App;
