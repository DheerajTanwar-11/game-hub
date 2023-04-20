import {
	Button,
	HStack,
	Heading,
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
		<>
			<Heading marginBottom={4}>Genres</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id}>
						<HStack paddingY={2}>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
							/>
							<Button
								fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
								textAlign="left"
								whiteSpace="normal"
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
		</>
	);
};

export default GenreList;
