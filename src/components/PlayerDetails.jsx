import { useEffect, useState } from "react";
import "../../src/App.css";
import { getPlayerById } from "../API";
import { Link, useParams } from "react-router-dom";

export default function PlayerDetails() {
  const [player, setPlayer] = useState(undefined);
  let { playerId } = useParams();

  useEffect(() => {
    async function getPlayer() {
      setPlayer(await getPlayerById(playerId));
    }
    console.info("getting player");
    getPlayer();
  }, [playerId]);

  if (!player) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    backgroundColor: "lightblue",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Player Details</h2>
        <img className="player-image" src={player.imageUrl} alt={player.name} />
        <p>Name: {player.name}</p>
        <p>Breed: {player.breed}</p>
        <p>Status: {player.status}</p>
        <p>Team ID: {player.teamId}</p>
        <p>Cohort ID: {player.cohortId}</p>
        <button>
          <Link to={`/`}>Back</Link>
        </button>
      </div>
    </div>
  );
}
