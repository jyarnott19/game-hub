import useData from "./useData";
import { GameQuery } from "@/App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform:Platform}[];
  metacritic: number;
}

//Fetch games from the API, passing the selected genre as a query parameter (if not null)
const useGames = (gameQuery: GameQuery) => 
  useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      page_size: gameQuery.page_size,
    }}, 
    [gameQuery]);


export default useGames;