import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const TornamentsChampion = ({ data }) => {
  return (
    <>
      <Confetti recycle={true} run={true} numberOfPieces={50} />
      <div className="row text-center mb-12">
        <h1 className="text-xl font-bold mb-4 text-primary">Campéon</h1>
        <div className="avatar mb-3">
          <div className="w-16 rounded-full">
            <Link to={`/equipos/${data[0].team_champion_id}`} className="hover:opacity-70">
              <img src={data[0].team_champion_image} width="128" height="128" alt={data[0].team_champion} />
            </Link>
          </div>
        </div>
        <h1 className="font-semibold mb-2">{data[0].team_champion}</h1>
      </div>
    </>
  );
};

export default TornamentsChampion;
