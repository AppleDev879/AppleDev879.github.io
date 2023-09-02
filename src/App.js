import SiteNav from "./components/nav/SiteNav";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Languages from "./components/languages/Languages";

function App() {
  return (
    <div className="App">
      <header>
        <SiteNav />
      </header>
      <main>
        <Hero />
        <Languages />
      </main>
    </div>
  );
}

export default App;
