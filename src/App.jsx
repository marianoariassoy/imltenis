import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sections from "./Sections";
import Welcome from "./pages/Welcome";
import ReactGA from "react-ga";

const App = () => {
  ReactGA.initialize("G-G1DBH0K86R");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Sections />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
