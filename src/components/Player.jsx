import "../../src/App.css";
import PropTypes from "prop-types";

export default function Player({ player }) {
  return (
    <div className="player">
      <h2>{player?.name}</h2>
      <p>{player?.breed}</p>
      <img className="player-image" src={player?.imageUrl} />
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    breed: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};
