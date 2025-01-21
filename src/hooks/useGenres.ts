import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Genre{
    id: number;
    name: string;
}
interface GenresResponse {
    count: number;
    results: Genre[];
}
const useGenres = () => {
const [genres, setGenres] = useState<Genre[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
          .get<GenresResponse>("/genres", {signal: controller.signal})
          .then((response) => {
            setGenres(response.data.results);
            setLoading(false);
          })
          .catch((error) => {
            if (error instanceof CanceledError) return;            
            setError(error.message);
            setLoading(false);
          });
          return () => {controller.abort();}
      }, []);
      return { genres, error, loading };
}

export default useGenres;