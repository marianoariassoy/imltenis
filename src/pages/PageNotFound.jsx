import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PageNotFound = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container mx-auto px-5 max-w-6xl">
        <div className="row text-center mb-8">
          <h1 className="text-2xl font-bold text-error mb-1">404</h1>
          <h1 className="text-2xl font-bold mb-1">Página no encontrada</h1>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PageNotFound;
