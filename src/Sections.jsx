import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import TournamentsContainer from "./pages/torneos/TorunamentsContainer";
import JugadoresRanking from "./pages/jugadores/JugadoresRanking";
import JugadoresContainer from "./pages/jugadores/JugadoresContainer";

import TeamsContainer from "./pages/equipos/TeamsContainer";
import Series from "./pages/Series";
import ClubesRanking from "./pages/clubes/ClubesRanking";
import ClubesDetail from "./pages/clubes/ClubesDetail";

import Reglamento from "./pages/Reglamento";
import PageNotFound from "./pages/PageNotFound";

const Sections = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto px-6 max-w-6xl">
        <Routes>
          <Route path="/torneos/:id" element={<TournamentsContainer />} />
          <Route path="/jugadores/:id" element={<JugadoresContainer />} />
          <Route path="/jugadores/ranking" element={<JugadoresRanking />} />

          <Route path="/equipos/:id" element={<TeamsContainer />} />
          <Route path="/series/:id" element={<Series />} />

          <Route path="/clubes/ranking" element={<ClubesRanking />} />
          <Route path="/clubes/:id" element={<ClubesDetail />} />
          <Route path="/reglamento" element={<Reglamento />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Sections;
