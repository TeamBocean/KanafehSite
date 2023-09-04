import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <Gallery/>
      <Reviews/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
