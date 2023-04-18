import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
	id: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	slug: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: [];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: {};
	metacritic: number;
	playtime: number;
	suggestions_count: number;
	updated: string;
	user_game: null;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	platforms: [];
	parent_platforms: { platform: Platform }[];
	genres: [];
	stores: [];
	clip: null;
	tags: [];
	esrb_rating: {};
	short_screenshots: [];
}

interface GamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();

		apiClient
			.get<GamesResponse>("/games", {
				signal: controller.signal,
			})
			.then((res) => {
				setGames(res.data.results);
			})
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setError(error.message);
			});

		return () => controller.abort();
	}, []);

	return { games, error };
};

export default useGames;
