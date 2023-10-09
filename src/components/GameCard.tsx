import {
	Card,
	CardBody,
	HStack,
	Heading,
	Image,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { colorMode } = useColorMode();
	const backgroundColor = colorMode != "dark" ? "#F8F8FF" : ""; // Set the background color based on color mode
	return (
		<Card style={{ backgroundColor }}>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">
					<Link to={"/games/" + game.slug}>{game.name}</Link>
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
