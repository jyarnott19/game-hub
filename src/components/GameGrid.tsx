import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
const GameGrid = () => {
  const { games, error } = useGames();

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
