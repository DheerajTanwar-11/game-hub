import { create } from "zustand";
import { Genre } from "./entities/Genre";
import { Platform } from "./entities/Platform";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sortOrder?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearch: (searchText: string) => void;
  setGenre: (genre: Genre | null) => void;
  setPlatform: (platform: Platform | null) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    genre: null,
    platform: null,
    sortOrder: "relevance",
    search: "",
  },
  setSearch: (search) => set(() => ({ gameQuery: { search } })),
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
