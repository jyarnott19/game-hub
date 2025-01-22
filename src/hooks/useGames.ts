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
const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
  useData<Game>("/games", {
    params: {
      genres: selectedGenre?.id, 
      platforms: selectedPlatform?.id
    }}, 
    [selectedGenre?.id, selectedPlatform?.id]);


export default useGames;