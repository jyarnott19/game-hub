import useGenres, { Genre } from "@/hooks/useGenres";
import getUrlWithInsertedText from "@/services/image-url";
import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";

//Notify the parent component (App.tsx) when a genre is selected
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();
  return (
    <>
      {loading && <Spinner />}
      {error && null}
      <List.Root variant="plain">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getUrlWithInsertedText(
                  genre.image_background,
                  "media/",
                  "crop/600/400/"
                )}
              />
              <Link
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                color={genre.id === selectedGenre?.id ? "blue" : ""}
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
