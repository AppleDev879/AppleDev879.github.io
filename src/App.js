import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Languages from "./components/languages/Languages";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Experience />
        <Languages />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
