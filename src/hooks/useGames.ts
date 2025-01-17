import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  image_background: string;
}
interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
   
      const [games, setGames] = useState<Game[]>([]);
      //const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const controller = new AbortController();
        //setLoading(true);
        apiClient
          .get<GamesResponse>("/games", {signal: controller.signal})
          .then((response) => {
            setGames(response.data.results);
            //setLoading(false);
          })
          .catch((error) => {
            if (error instanceof CanceledError) return;            
            setError(error.message);
            //setLoading(false);
          });
          return () => {controller.abort();}
      }, []);
      return { games, error };

}


export default useGames;