import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({
		genre: null,
		platform: null,
	});

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 3fr",
			}}
		>
			<GridItem area="nav">
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<PlatformSelector
					onSelect={(platform) => setGameQuery({ ...gameQuery, platform })}
					selectedPlatform={gameQuery.platform}
				/>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
