import "../../src/App.css";
import { Link } from "react-router-dom";
import Player from "./Player";
import { deletePlayer } from "../API";
import PropTypes from "prop-types";

export default function SinglePlayer({ player, onPlayerDeleted }) {
  const handleDelete = async () => {
    await deletePlayer(player.id);
    onPlayerDeleted(player.id);
  };
  return (
    <div className="player">
      <Player player={player} />
      <div className="button-container">
        <button>
          <Link to={`/${player.id}`}>Details</Link>
        </button>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  );
}

SinglePlayer.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    breed: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,

  onPlayerDeleted: PropTypes.func.isRequired,
};
