import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Fixture from '../torneos/Fixture'

const TeamsFixture = ({ team_id }) => {
  const { data, loading } = useFetch(`/teams/${team_id}/fixture`)

  if (loading) return <Loader />
  if (!data) return null

  return (
    <Fixture
      data={data}
      type={2}
    />
  )
}

export default TeamsFixture
