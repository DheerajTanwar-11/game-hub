import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenshots(id);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={4}
    >
      {data?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.id.toString()}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
