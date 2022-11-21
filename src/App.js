import Form from "./components/Form/Form";
// import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Hero /> */}
      <Form />
      <Footer />
    </div>
  );
}

export default App;
