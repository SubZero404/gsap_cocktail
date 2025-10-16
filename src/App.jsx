import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className=" h-[200vh]"></div>
    </main>
  );
}

export default App;
