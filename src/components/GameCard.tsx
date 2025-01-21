import { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
//import Card from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card.Root borderRadius={10} overflow="hidden">
        <Image src={game.background_image} alt={game.name} />
        <Card.Header>{game.name}</Card.Header>
        <CardBody display="inline-block">
          <HStack justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

export default GameCard;
