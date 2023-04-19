import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, isLoading } = useGenres();

	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id}>
					<HStack paddingY={2}>
						<Image
							src={getCroppedImageUrl(genre.image_background)}
							boxSize="32px"
							borderRadius={8}
						/>
						<Button
							fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
							variant="link"
							fontSize="lg"
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
