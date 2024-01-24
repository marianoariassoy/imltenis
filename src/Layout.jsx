import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <main className='mx-auto px-4 max-w-5xl mt-24 w-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
