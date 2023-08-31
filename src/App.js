import SiteNav from "./components/nav/SiteNav";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <header>
        <SiteNav />
      </header>
      <main>
        <Hero />
        <Experience />
      </main>
    </div>
  );
}

export default App;
