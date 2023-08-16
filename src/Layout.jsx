import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='mx-auto px-4 max-w-6xl mt-24 w-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
