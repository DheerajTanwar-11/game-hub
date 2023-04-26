import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const genre = useGameQueryStore((s) => s.gameQuery.genre);
  const setGenre = useGameQueryStore((s) => s.setGenre);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={4}>Genres</Heading>
      <List>
        {data?.results.map((item) => (
          <ListItem key={item.id}>
            <HStack paddingY={2}>
              <Image
                src={getCroppedImageUrl(item.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontWeight={genre?.id === item.id ? "bold" : "normal"}
                textAlign="left"
                whiteSpace="normal"
                variant="link"
                fontSize="lg"
                onClick={() => setGenre(item)}
              >
                {item.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
