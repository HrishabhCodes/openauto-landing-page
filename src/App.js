import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Form />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
