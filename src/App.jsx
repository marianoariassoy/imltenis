import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Layout from './Layout'
import Welcome from './pages/Welcome'
import TournamentsContainer from './pages/fixture/TorunamentsContainer'
import JugadoresRanking from './pages/jugadores/JugadoresRanking'
import JugadoresContainer from './pages/jugadores/JugadoresContainer'
import TeamsContainer from './pages/equipos/TeamsContainer'
import SeriesContainer from './pages/series/SeriesContainer'
import ClubesRanking from './pages/clubes/ClubesRanking'
import ClubesContainer from './pages/clubes/ClubesContainer'
import Torneos from './pages/torneos/Torneos'
import Nosotros from './pages/Nosotros'
import Reglamento from './pages/Reglamento'
import PageNotFound from './pages/PageNotFound'
import TournamentsCalendar from './pages/fixture/TornamentsCalendar'
import Colaboradores from './pages/colaboradores/Colaboradores'
import Soon from './Soon'

const App = () => {
  ReactGA.initialize('G-G1DBH0K86R')

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Welcome />}
          />
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
            path='/jugadores/:id'
            element={<JugadoresContainer />}
          />
          <Route
            path='/jugadores/ranking'
            element={<JugadoresRanking />}
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
            path='/clubes/ranking'
            element={<ClubesRanking />}
          />
          <Route
            path='/clubes/:id'
            element={<ClubesContainer />}
          />
          <Route
            path='/historial'
            element={<Torneos />}
          />
          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/reglamento'
            element={<Reglamento />}
          />
          <Route
            path='/soon'
            element={<Soon />}
          />
          <Route
            path='/colaboradores'
            element={<Colaboradores />}
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
