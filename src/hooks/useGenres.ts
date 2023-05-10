// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres')

// const useGenres = () => useData<Genre>('/genres');
// const useGenres = () => ({ data: genres, isLoading: false, error: null});
const useGenres = () => useQuery ({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime:  ms('24h'),
    initialData: genres

})

export default useGenres;
