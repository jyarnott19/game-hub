import useGenres from "@/hooks/useGenres";
import getUrlWithInsertedText from "@/services/image-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
