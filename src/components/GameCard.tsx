import { Game } from "@/hooks/useGames";
import { Card, CardBody, Image } from "@chakra-ui/react";
//import Card from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Header>{game.name}</Card.Header>
      <CardBody></CardBody>
    </Card.Root>
  );
};

export default GameCard;
