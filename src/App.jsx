import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Layout from './layout/Layout'
// import Welcome from './pages/home'

import Tournaments from './pages/torneos'
import JugadoresProfile from './pages/jugadores/Profile'
import Teams from './pages/equipos'
import Series from './pages/series'
import Calendar from './pages/torneos/Calendar'
import Clubes from './pages/clubes'

import RankingTemporada from './pages/jugadores/RankingTemporada'
import RankingJugadores from './pages/jugadores/Ranking'
import RankingClubes from './pages/clubes/Ranking'

import Jugadores from './pages/jugadores'
import TorneosAnteriores from './pages/torneos-anteriores'
import Colaboradores from './pages/colaboradores'
import Reglamento from './pages/reglamento'
import Nosotros from './pages/nosotros'

import Presentacion from './pages/presentacion'
import Soon from './pages/Soon'
import PageNotFound from './pages/PageNotFound'

import UsersLogin from './pages/users'
import UsersRegistro from './pages/users/Registro'

const App = () => {
  ReactGA.initialize('G-G1DBH0K86R')

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Soon />}
          />
          {/* <Route
            path='/'
            element={<Welcome />}
          /> */}

          <Route
            path='/torneos/:id/:slug'
            element={<Tournaments />}
          />
          <Route
            path='/torneos/series/:id'
            element={<Calendar />}
          />
          <Route
            path='/clubes/:id/:slug'
            element={<Clubes />}
          />
          <Route
            path='/equipos/:id/:slug'
            element={<Teams />}
          />
          <Route
            path='/jugadores/:id'
            element={<JugadoresProfile />}
          />
          <Route
            path='/series/:id'
            element={<Series />}
          />
          <Route
            path='/ranking-temporada'
            element={<RankingTemporada />}
          />
          <Route
            path='/ranking-urbankicks'
            element={<RankingJugadores />}
          />
          <Route
            path='/ranking-clubes'
            element={<RankingClubes />}
          />
          <Route
            path='/torneos-anteriores'
            element={<TorneosAnteriores />}
          />
          <Route
            path='/jugadores'
            element={<Jugadores />}
          />
          <Route
            path='/colaboradores'
            element={<Colaboradores />}
          />
          <Route
            path='/reglamento'
            element={<Reglamento />}
          />
          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/presentacion'
            element={<Presentacion />}
          />
          <Route
            path='/usuarios/login'
            element={<UsersLogin />}
          />
          <Route
            path='/usuarios/registro'
            element={<UsersRegistro />}
          />

          <Route
            path='/soon'
            element={<Soon />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
