import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container mx-auto px-6 max-w-6xl">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
