import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Layout from './layout/Layout'
// import Welcome from './pages/home'

import TournamentsContainer from './pages/torneos/TorunamentsContainer'
import RankingTemporada from './pages/jugadores/RankingTemporada'
import RankingJugadores from './pages/jugadores/RankingJugadores'
import RankingClubes from './pages/clubes/RankingClubes'
import Colaboradores from './pages/colaboradores'
import Jugadores from './pages/jugadores'
import TorneosAnteriores from './pages/torneos-anteriores'
import Nosotros from './pages/nosotros'
import Reglamento from './pages/reglamento'

import JugadoresContainer from './pages/jugadores/JugadoresContainer'
import TeamsContainer from './pages/equipos/TeamsContainer'
import SeriesContainer from './pages/series/SeriesContainer'
import TournamentsCalendar from './pages/torneos/TornamentsCalendar'
import ClubesContainer from './pages/clubes/ClubesContainer'

import Soon from './pages/Soon'
import PageNotFound from './pages/PageNotFound'

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
            path='/torneos/:id/grupo/:gid'
            element={<TournamentsContainer />}
          />
          <Route
            path='/torneos/:id'
            element={<TournamentsContainer />}
          />
          <Route
            path='/torneos/series/:id'
            element={<TournamentsCalendar />}
          />

          <Route
            path='/ranking-jugadores'
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
            path='/clubes/:id'
            element={<ClubesContainer />}
          />

          <Route
            path='/jugadores'
            element={<Jugadores />}
          />
          <Route
            path='/jugadores/:id'
            element={<JugadoresContainer />}
          />

          <Route
            path='/equipos/:id'
            element={<TeamsContainer />}
          />
          <Route
            path='/series/:id'
            element={<SeriesContainer />}
          />

          <Route
            path='/torneos-anteriores'
            element={<TorneosAnteriores />}
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
