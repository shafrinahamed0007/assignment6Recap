import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="w-11/12 md:w-10/12  mx-auto mt-5 md:mt-10">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
