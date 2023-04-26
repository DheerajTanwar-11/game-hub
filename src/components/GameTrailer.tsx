import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
	id: number;
}

const GameTrailer = ({ id }: Props) => {
	const { data, isLoading, error } = useTrailers(id);

	if (isLoading) return <Spinner />;

	if (error || !data) throw error;

	const first = data.results[0];

	return first ? (
		<video
			controls
			src={data.results[0].data.max}
			poster={data.results[0].preview}
		/>
	) : null;
};

export default GameTrailer;
