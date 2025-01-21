import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

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
const useGames = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);


export default useGames;