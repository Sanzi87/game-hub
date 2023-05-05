import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () =>  
    useQuery({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24h,
        //initialData: { count: platforms.length, result: platforms } //error with .length?
})

export default usePlatforms;