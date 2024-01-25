import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky top-0 z-50 mb-6'>
        <Header />
        <NavBar />
      </header>
      <main className='mx-auto px-6 max-w-6xl w-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
