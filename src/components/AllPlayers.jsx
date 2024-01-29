import { useState, useEffect } from "react";
import { getAllPlayers } from "../API";
import SinglePlayer from "./SinglePlayer";
import "../../src/App.css";
import { useSearchParams } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [initialPlayers, setInitialPlayers] = useState([]);
  let [searchParams] = useSearchParams();

  let search = searchParams.get("search");

  const onPlayerDeleted = (playerId) => {
    console.info(`removing playerId: ${playerId} from collection`);
    setPlayers((currentPlayers) =>
      currentPlayers.filter((player) => player.id !== playerId)
    );
  };

  // const resetPlayerList = () => {
  //   console.log("Reset button clicked");
  //   setPlayers([...initialPlayers]);
  // };

  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await getAllPlayers();
      console.log(`search: ${search}`);

      if (search !== undefined && search !== null) {
        const filteredPlayers = allPlayers.filter((player) =>
          player.name.toUpperCase().includes(search.toUpperCase())
        );
        setPlayers(filteredPlayers);
        console.log("Filtered Players:", filteredPlayers);

        setInitialPlayers(filteredPlayers); // Initialize with the filtered data
        console.log("Initial Players (Filtered):", filteredPlayers);
      } else {
        setPlayers(allPlayers);
        console.log("All Players:", allPlayers);

        setInitialPlayers(allPlayers); // Initialize with the unfiltered data
        console.log("Initial Players (All):", allPlayers);
      }
    }
    getPlayers();
  }, [search]);

  return (
    <div>
      {/* <button className="reset-button" onClick={resetPlayerList}>
        Reset
      </button> */}
      {players?.map((player) => {
        return (
          <SinglePlayer
            key={player.id}
            player={player}
            onPlayerDeleted={onPlayerDeleted}
          />
        );
      })}
    </div>
  );
}
