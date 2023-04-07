import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Tournaments from "./pages/Tournaments";
import Teams from "./pages/Teams";
import Series from "./pages/Series";
import Jugadores from "./pages/Jugadores";
import Clubes from "./pages/Clubes";
import ClubesRanking from "./pages/ClubesRanking";
import ClubesDetail from "./pages/ClubesDetail";
import JugadoresRanking from "./pages/JugadoresRanking";
import Reglamento from "./pages/Reglamento";

import React from "react";

const Sections = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto px-5 max-w-6xl">
        <Routes>
          <Route path="/torneos/:id" element={<Tournaments />} />
          <Route path="/equipos/:id" element={<Teams />} />
          <Route path="/series/:id" element={<Series />} />
          <Route path="/jugadores/:id" element={<Jugadores />} />
          <Route path="/jugadores/ranking" element={<JugadoresRanking />} />
          <Route path="/clubes/" element={<Clubes />} />
          <Route path="/clubes/:id" element={<ClubesDetail />} />
          <Route path="/clubes-ranking" element={<ClubesRanking />} />
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
