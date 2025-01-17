import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "@/services/api-client";

interface Game {
  id: number;
  name: string;
  image_background: string;
}
interface GamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GamesResponse>("/gamesx")
      .then((response) => {
        setGames(response.data.results);
        //setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        //setLoading(false);
      });
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {/* <img src={game.image_background} alt={game.name} /> */}
            <p>{game.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
