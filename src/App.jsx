import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import StatsSection from "./components/StatsSection/StatsSection";

function App() {
  return (
    <div>
      <Navbar />
      <main className=" md:mt-10">
        <HeroSection  />
        <StatsSection />
      </main>
    </div>
  );
}

export default App;
