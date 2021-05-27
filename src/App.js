import Home from "./components/hero";
import Footer from "./components/footer";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
