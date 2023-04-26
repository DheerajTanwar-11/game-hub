import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, isLoading, error } = useTrailers(id);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <video
      controls
      src={data.results[0].data.max}
      poster={data.results[0].preview}
    />
  );
};

export default GameTrailer;
