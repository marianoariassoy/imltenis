//Dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Welcome from "./pages/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Tournaments from "./pages/Tournaments";
import Teams from "./pages/Teams";
import Series from "./pages/Series";
import Jugadores from "./pages/Jugadores";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto px-5 max-w-6xl">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/torneos/:id" element={<Tournaments />} />
          <Route path="/equipos/:id" element={<Teams />} />
          <Route path="/series/:id" element={<Series />} />
          <Route path="/jugadores/:id" element={<Jugadores />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default App;
