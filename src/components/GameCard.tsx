import { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getUrlWithInsertedText from "@/services/image-url";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <Card.Root>
        <Image
          src={getUrlWithInsertedText(
            game.background_image,
            "media/",
            "crop/600/400/"
          )}
          alt={game.name}
        />
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
